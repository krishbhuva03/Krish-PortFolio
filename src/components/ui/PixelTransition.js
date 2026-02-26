import React, { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import "./PixelTransition.css";

const PixelTransition = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "#ffffff",
  animationStepDuration = 0.3,
  className = "",
  style = {},
  once = false,
}) => {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(false);
  const hasAnimatedRef = useRef(false);
  const tlRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const buildPixels = useCallback(() => {
    const grid = pixelGridRef.current;
    if (!grid) return;
    grid.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
      const pixel = document.createElement("div");
      pixel.style.backgroundColor = pixelColor;
      pixel.style.opacity = 0;
      grid.appendChild(pixel);
    }
  }, [gridSize, pixelColor]);

  useEffect(() => {
    buildPixels();
  }, [buildPixels]);

  const animateIn = useCallback(() => {
    if (once && hasAnimatedRef.current) return;
    if (tlRef.current) tlRef.current.kill();

    const grid = pixelGridRef.current;
    if (!grid) return;
    const pixels = grid.querySelectorAll("div");
    const totalPixels = pixels.length;
    const steps = gridSize;
    const staggerDelay = animationStepDuration / steps;

    const shuffled = Array.from(pixels).sort(() => Math.random() - 0.5);

    tlRef.current = gsap.timeline({
      onStart: () => { activeRef.current = true; },
      onComplete: () => {
        if (once) hasAnimatedRef.current = true;
      },
    });

    tlRef.current.to(shuffled, {
      opacity: 1,
      duration: animationStepDuration / 2,
      stagger: staggerDelay / totalPixels * animationStepDuration * 2,
      ease: "none",
    });
  }, [gridSize, animationStepDuration, once]);

  const animateOut = useCallback(() => {
    if (once && hasAnimatedRef.current) return;
    if (tlRef.current) tlRef.current.kill();

    const grid = pixelGridRef.current;
    if (!grid) return;
    const pixels = grid.querySelectorAll("div");
    const shuffled = Array.from(pixels).sort(() => Math.random() - 0.5);

    tlRef.current = gsap.timeline({
      onComplete: () => { activeRef.current = false; },
    });

    tlRef.current.to(shuffled, {
      opacity: 0,
      duration: animationStepDuration / 2,
      stagger: animationStepDuration / (pixels.length * 2),
      ease: "none",
    });
  }, [animationStepDuration, once]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    animateIn();
  }, [animateIn]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    animateOut();
  }, [animateOut]);

  return (
    <div
      ref={containerRef}
      className={`pixel-transition-container ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* First content (icon) - always visible behind */}
      <div className="pixel-transition-first">
        {firstContent}
      </div>

      {/* Pixel overlay grid */}
      <div
        ref={pixelGridRef}
        className="pixel-transition-grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      />

      {/* Second content (name) - visible on top when hovered */}
      <div className={`pixel-transition-second ${isHovered ? "pixel-transition-second--visible" : ""}`}>
        {secondContent}
      </div>
    </div>
  );
};

export default PixelTransition;
