import { motion, useSpring } from "framer-motion";
import React, { useEffect } from "react";

export default function ScrollProgress({ className = "", ...props }) {
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      const progress = scrollY / windowHeight;
      scaleX.set(progress);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scaleX]);

  return (
    <motion.div
      className={className}
      {...props}
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        transformOrigin: "0%",
        background: "#c770f0", 
        zIndex: 999,
        ...props.style
      }}
    />
  );
}
