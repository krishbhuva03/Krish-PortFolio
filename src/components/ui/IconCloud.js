import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * 3D Icon Cloud - A rotating sphere of tech icon images
 * Inspired by MagicUI's IconCloud component
 */
function IconCloud({ images = [], size = 400, speed = 0.003 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pointsRef = useRef([]);
  const loadedImagesRef = useRef([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Distribute points on a sphere using Fibonacci spiral
  const distributePoints = useCallback((count) => {
    const points = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      points.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }
    return points;
  }, []);

  // Load images
  useEffect(() => {
    if (images.length === 0) return;

    let mounted = true;
    const loaded = [];
    let loadCount = 0;

    images.forEach((src, idx) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        loaded[idx] = img;
        loadCount++;
        if (loadCount === images.length && mounted) {
          loadedImagesRef.current = loaded;
          pointsRef.current = distributePoints(images.length);
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loaded[idx] = null;
        loadCount++;
        if (loadCount === images.length && mounted) {
          loadedImagesRef.current = loaded;
          pointsRef.current = distributePoints(images.length);
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });

    return () => { mounted = false; };
  }, [images, distributePoints]);

  // Rotate point around Y axis, then X axis
  const rotatePoint = useCallback((point, rotX, rotY) => {
    // Rotate around Y
    let x = point.x * Math.cos(rotY) - point.z * Math.sin(rotY);
    let z = point.x * Math.sin(rotY) + point.z * Math.cos(rotY);
    let y = point.y;
    // Rotate around X
    let y2 = y * Math.cos(rotX) - z * Math.sin(rotX);
    let z2 = y * Math.sin(rotX) + z * Math.cos(rotX);
    return { x, y: y2, z: z2 };
  }, []);

  // Mouse interaction
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseRef.current = {
        x: (e.clientX - centerX) / (rect.width / 2),
        y: (e.clientY - centerY) / (rect.height / 2),
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const radius = size * 0.38;
    const iconSize = size * 0.14;
    const centerX = size / 2;
    const centerY = size / 2;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // Auto-rotate with mouse influence
      if (mouseRef.current.active) {
        rotationRef.current.y += mouseRef.current.x * speed * 3;
        rotationRef.current.x += mouseRef.current.y * speed * 3;
      } else {
        rotationRef.current.y += speed;
        rotationRef.current.x += speed * 0.3;
      }

      // Sort by z-depth for painter's algorithm
      const projected = pointsRef.current.map((point, i) => {
        const rotated = rotatePoint(
          point,
          rotationRef.current.x,
          rotationRef.current.y
        );
        const scale = (rotated.z + 1.5) / 2.5; // 0 to 1 based on depth
        return {
          x: centerX + rotated.x * radius,
          y: centerY + rotated.y * radius,
          z: rotated.z,
          scale,
          index: i,
        };
      });

      projected.sort((a, b) => a.z - b.z);

      // Draw each icon
      projected.forEach(({ x, y, scale, index }) => {
        const img = loadedImagesRef.current[index];
        if (!img) return;

        const s = iconSize * (0.5 + scale * 0.5);
        const opacity = 0.15 + scale * 0.85;

        ctx.globalAlpha = opacity;
        ctx.save();

        // Draw circular clipped icon
        ctx.beginPath();
        ctx.arc(x, y, s / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Background circle
        ctx.fillStyle = `rgba(20, 20, 30, ${0.6 * opacity})`;
        ctx.fill();

        // Draw image
        ctx.drawImage(img, x - s / 2, y - s / 2, s, s);

        ctx.restore();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imagesLoaded, size, speed, rotatePoint]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: size,
        height: size,
        cursor: "grab",
      }}
    />
  );
}

export default IconCloud;
