import React, { useState, useEffect, useRef } from "react";

export function TypingAnimation({ children, className = "", delay = 0, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
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
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const delayTimer = setTimeout(() => {
      let currentIndex = 0;
      setDisplayedText("");

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [text, speed, delay, hasStarted]);

  return (
    <div ref={elementRef} className={`typing-animation ${className}`}>
      {displayedText}
      {hasStarted && !isComplete && <span className="typing-cursor">▋</span>}
    </div>
  );
}
