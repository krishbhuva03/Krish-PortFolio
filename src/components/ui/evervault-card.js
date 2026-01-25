import React, { useEffect, useRef, useState } from "react";
import "./evervault-card.css";

// Utility function to generate random string for encryption effect
function useMotionValue(initial) {
  const [value, setValue] = useState(initial);
  return { get: () => value, set: setValue, value };
}

export const EvervaultCard = ({ text, className, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`evervault-card-container ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="evervault-card-gradient"
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="evervault-card-pattern">
        <CardPattern mouseX={mousePosition.x} mouseY={mousePosition.y} isHovered={isHovered} />
      </div>
      <div className="evervault-card-content">
        {children || (
          <EncryptedText text={text} isHovered={isHovered} />
        )}
      </div>
    </div>
  );
};

const CardPattern = ({ mouseX, mouseY, isHovered }) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = "";
    for (let i = 0; i < 1500; i++) {
      str += characters[Math.floor(Math.random() * characters.length)];
    }
    setRandomString(str);
  }, []);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        let str = "";
        for (let i = 0; i < 1500; i++) {
          str += characters[Math.floor(Math.random() * characters.length)];
        }
        setRandomString(str);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="card-pattern-text"
      style={{
        maskImage: isHovered
          ? `radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent)`
          : "none",
        WebkitMaskImage: isHovered
          ? `radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent)`
          : "none",
      }}
    >
      {randomString}
    </div>
  );
};

const EncryptedText = ({ text, isHovered }) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <span className="encrypted-text">
      {displayText}
    </span>
  );
};

export const Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default EvervaultCard;
