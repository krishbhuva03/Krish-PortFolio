import React, { useState, useEffect } from "react";

export function ScrollProgress({ className = "" }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className={className}
      style={{
        position: "fixed",
        top: "65px",
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: "rgba(200, 200, 200, 0.2)",
        zIndex: 9998,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #c770f0 0%, #87CEFA 50%, #FF6B9D 100%)",
          transition: "width 0.1s ease-out",
          boxShadow: "0 0 10px rgba(199, 112, 240, 0.5)",
        }}
      />
    </div>
  );
}
