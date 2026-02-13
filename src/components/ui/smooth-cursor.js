import { useEffect, useRef, useState, useCallback } from "react";

const DefaultCursorSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={22}
      viewBox="0 0 50 54"
      fill="none"
    >
      <g filter="url(#filter0_d_91_7928)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="black"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="white"
          strokeWidth={2.25825}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_91_7928"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_91_7928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_91_7928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const rafId = useRef(null);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      // Spring physics for position
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 0.1) {
        // Apply spring force
        currentPos.current.x += dx * 0.25;
        currentPos.current.y += dy * 0.25;
        
        setPosition({
          x: currentPos.current.x,
          y: currentPos.current.y
        });
      }
      
      rafId.current = requestAnimationFrame(animate);
    };
    
    rafId.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaTime = Math.max(currentTime - lastTime.current, 1);
      
      // Update target position
      targetPos.current = {
        x: e.clientX,
        y: e.clientY
      };
      
      // Calculate velocity
      velocity.current = {
        x: (e.clientX - lastMouse.current.x) / deltaTime,
        y: (e.clientY - lastMouse.current.y) / deltaTime
      };
      
      const speed = Math.sqrt(
        velocity.current.x * velocity.current.x + 
        velocity.current.y * velocity.current.y
      );
      
      // Update rotation based on velocity
      if (speed > 0.05) {
        const currentAngle = 
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90;
        
        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        
        accumulatedRotation.current += angleDiff;
        setRotation(accumulatedRotation.current);
        previousAngle.current = currentAngle;
        
        setScale(0.9);
        
        // Reset scale after a bit
        setTimeout(() => setScale(1), 150);
      }
      
      lastMouse.current = { x: e.clientX, y: e.clientY };
      lastTime.current = currentTime;
    };
    
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
        opacity: 1,
      }}
    >
      {cursor}
    </div>
  );
}
