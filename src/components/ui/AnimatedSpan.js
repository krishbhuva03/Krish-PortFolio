import React, { useState, useEffect, useRef } from "react";

export function AnimatedSpan({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            const timer = setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
            
            return () => clearTimeout(timer);
          }
        });
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
  }, [delay, hasAnimated]);

  return (
    <div ref={elementRef} className={`animated-span ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
