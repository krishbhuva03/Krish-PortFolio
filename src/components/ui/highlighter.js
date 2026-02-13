import React, { useEffect, useRef, useState } from "react";
import "./highlighter.css";

export function Highlighter({ 
  children, 
  action = "highlight", 
  color = "#c770f0" 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  // Generate stable random values (using ref to keep consistent across renders)
  const randomValuesRef = useRef({
    offset: Math.random() * 2 - 1,
    rotation: (Math.random() * 2 - 1) * 0.5,
    pathVariation: Math.random() * 2
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  
  const highlightStyle = {
    position: "relative",
    display: "inline",
    fontWeight: "600",
  };

  const backgroundStyle = {
    position: "absolute",
    left: "-3px",
    right: "-3px",
    top: "0",
    bottom: "0",
    background: `linear-gradient(120deg, ${color}00 0%, ${color}55 10%, ${color}88 50%, ${color}55 90%, ${color}00 100%)`,
    transform: `skewX(${randomValuesRef.current.rotation}deg) translateY(${randomValuesRef.current.offset}px)`,
    zIndex: -1,
    borderRadius: "3px 8px 2px 6px",
    opacity: 0.7,
  };

  const underlineStyle = {
    position: "relative",
    display: "inline-block",
    fontWeight: "600",
  };

  if (action === "highlight") {
    return (
      <span ref={elementRef} style={highlightStyle}>
        <span 
          className={isVisible ? "highlighter-bg-animate" : "highlighter-bg-hidden"} 
          style={backgroundStyle}
        ></span>
        {children}
      </span>
    );
  }

  if (action === "underline") {
    const pathId = `path-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <span ref={elementRef} style={underlineStyle}>
        {children}
        <svg
          style={{
            position: "absolute",
            left: "-2px",
            right: "-2px",
            bottom: "-3px",
            width: "calc(100% + 4px)",
            height: "8px",
            overflow: "visible",
            pointerEvents: "none",
          }}
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
        >
          <path
            id={pathId}
            className={isVisible ? "highlighter-underline-animate" : "highlighter-underline-hidden"}
            d={`M 0,${4 + randomValuesRef.current.offset} Q 25,${3 + randomValuesRef.current.pathVariation} 50,${4 + randomValuesRef.current.offset} T 100,${4 + randomValuesRef.current.offset}`}
            stroke={color}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </span>
    );
  }

  return <span>{children}</span>;
}
