import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 6000;
const SPREAD         = 80;
const MOUSE_RADIUS   = 18;
const MOUSE_STRENGTH = 0.06;
const RETURN_SPEED   = 0.012;
const DRIFT_SPEED    = 0.0008;
const BASE_SIZE      = 0.18;

export default function ParticleBackground() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    // ── Buffers ──
    const positions   = new Float32Array(PARTICLE_COUNT * 3);
    const origins     = new Float32Array(PARTICLE_COUNT * 3);
    const velocities  = new Float32Array(PARTICLE_COUNT * 3);
    const colors      = new Float32Array(PARTICLE_COUNT * 3);
    const sizes       = new Float32Array(PARTICLE_COUNT);
    const phaseOffset = new Float32Array(PARTICLE_COUNT);

    const palette = [
      new THREE.Color("#0a84ff"),
      new THREE.Color("#00d4ff"),
      new THREE.Color("#5e9bff"),
      new THREE.Color("#ffffff"),
      new THREE.Color("#1a3aff"),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3    = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = Math.cbrt(Math.random()) * SPREAD;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) * 0.3;

      positions[i3] = origins[i3] = x;
      positions[i3 + 1] = origins[i3 + 1] = y;
      positions[i3 + 2] = origins[i3 + 2] = z;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = c.r; colors[i3 + 1] = c.g; colors[i3 + 2] = c.b;
      sizes[i] = BASE_SIZE + Math.random() * 0.35 * (1 - r / SPREAD);
      phaseOffset[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vAlpha = clamp(1.0 - (-mvPos.z - 10.0) / 60.0, 0.2, 1.0);
          gl_PointSize = size * (350.0 / -mvPos.z);
          gl_Position  = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2  uv   = gl_PointCoord - 0.5;
          float dist = length(uv);
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // ── Mouse tracking ──
    const mouse3D  = new THREE.Vector3(9999, 9999, 0);
    const raycaster = new THREE.Raycaster();
    const mouseNDC  = new THREE.Vector2();
    const plane     = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width)  *  2 - 1;
      mouseNDC.y = ((e.clientY - rect.top)  / rect.height) * -2 + 1;
      raycaster.setFromCamera(mouseNDC, camera);
      raycaster.ray.intersectPlane(plane, mouse3D);
    };
    const onMouseLeave = () => mouse3D.set(9999, 9999, 0);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // ── Resize ──
    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ──
    const posAttr = geo.attributes.position;
    const clock   = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mat.uniforms.uTime.value = t;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const px = posAttr.array[i3], py = posAttr.array[i3 + 1], pz = posAttr.array[i3 + 2];
        const dx = px - mouse3D.x, dy = py - mouse3D.y;
        const dist2 = dx * dx + dy * dy;

        if (dist2 < MOUSE_RADIUS * MOUSE_RADIUS && dist2 > 0.001) {
          const dist  = Math.sqrt(dist2);
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          velocities[i3]     += (dx / dist) * force * MOUSE_STRENGTH;
          velocities[i3 + 1] += (dy / dist) * force * MOUSE_STRENGTH;
        }

        velocities[i3]     += (origins[i3]     - px) * RETURN_SPEED;
        velocities[i3 + 1] += (origins[i3 + 1] - py) * RETURN_SPEED;
        velocities[i3 + 2] += (origins[i3 + 2] - pz) * RETURN_SPEED * 0.5;

        const ph = phaseOffset[i];
        velocities[i3]     += Math.sin(t * 0.4 + ph) * DRIFT_SPEED;
        velocities[i3 + 1] += Math.cos(t * 0.3 + ph * 1.3) * DRIFT_SPEED;
        velocities[i3 + 2] += Math.sin(t * 0.2 + ph * 0.7) * DRIFT_SPEED * 0.3;

        velocities[i3]     *= 0.92;
        velocities[i3 + 1] *= 0.92;
        velocities[i3 + 2] *= 0.92;

        posAttr.array[i3]     = px + velocities[i3];
        posAttr.array[i3 + 1] = py + velocities[i3 + 1];
        posAttr.array[i3 + 2] = pz + velocities[i3 + 2];
      }

      posAttr.needsUpdate = true;
      particles.rotation.y = t * 0.025;
      particles.rotation.x = Math.sin(t * 0.015) * 0.1;
      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
