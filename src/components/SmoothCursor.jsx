import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function SmoothCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate angle based on movement direction
      const deltaX = newX - lastPosition.current.x;
      const deltaY = newY - lastPosition.current.y;
      
      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle + 90); // +90 to point triangle forward
      }
      
      lastPosition.current = { x: newX, y: newY };
      setMousePosition({ x: newX, y: newY });
    };

    const handleMouseOver = (e) => {
      // Detect if hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.onclick ||
        target.style.cursor === "pointer";
      
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor triangle */}
      <motion.div
        className="cursor-triangle"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          rotate: rotation,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          x: { type: "spring", damping: 30, stiffness: 400, mass: 0.5 },
          y: { type: "spring", damping: 30, stiffness: 400, mass: 0.5 },
          rotate: { type: "spring", damping: 20, stiffness: 300, mass: 0.3 },
          scale: { duration: 0.2 },
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "20px solid #c770f0",
          pointerEvents: "none",
          zIndex: 9999,
          filter: "drop-shadow(0 0 15px rgba(199, 112, 240, 0.8))",
        }}
      />
      
      {/* Outer triangle outline that follows with delay */}
      <motion.div
        className="cursor-triangle-outline"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          rotate: rotation,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          x: { type: "spring", damping: 25, stiffness: 250, mass: 0.8 },
          y: { type: "spring", damping: 25, stiffness: 250, mass: 0.8 },
          rotate: { type: "spring", damping: 15, stiffness: 200, mass: 0.5 },
          scale: { duration: 0.3 },
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "30px solid rgba(199, 112, 240, 0.4)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
