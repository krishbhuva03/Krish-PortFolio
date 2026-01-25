import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className = "",
  containerClassName = "",
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const wRef = useRef(0);
  const hRef = useRef(0);
  const ntRef = useRef(0);
  const animationIdRef = useRef(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#c770f0",
    "#9b4dca",
    "#7b2cbf",
    "#5a189a",
    "#3c096c",
  ];

  const drawWave = (n) => {
    const ctx = ctxRef.current;
    const w = wRef.current;
    const h = hRef.current;
    
    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + h * 0.7);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    const ctx = ctxRef.current;
    const w = wRef.current;
    const h = hRef.current;
    
    ctx.fillStyle = backgroundFill || "rgba(12, 5, 19, 1)";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  };

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    
    wRef.current = ctx.canvas.width = window.innerWidth;
    hRef.current = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    ntRef.current = 0;
    
    window.onresize = function () {
      wRef.current = ctx.canvas.width = window.innerWidth;
      hRef.current = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={containerClassName}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div
        className={className}
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;
