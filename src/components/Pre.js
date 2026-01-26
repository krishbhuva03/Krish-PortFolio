import React, { useState, useEffect, useRef } from "react";
import "./Pre.css";
import { 
  DiReact, 
  DiNodejsSmall, 
  DiPython, 
  DiJavascript1, 
  DiMongodb, 
  DiGit,
  DiCss3,
  DiHtml5,
  DiJava,
  DiDocker
} from "react-icons/di";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiFirebase, 
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiAmazon,
  SiKubernetes
} from "react-icons/si";

// Tech icons with their brand colors
const techLogos = [
  { Icon: DiReact, color: "#61DAFB" },
  { Icon: DiNodejsSmall, color: "#68A063" },
  { Icon: DiPython, color: "#FFD43B" },
  { Icon: DiJavascript1, color: "#F7DF1E" },
  { Icon: DiMongodb, color: "#4DB33D" },
  { Icon: DiGit, color: "#F05032" },
  { Icon: DiCss3, color: "#1572B6" },
  { Icon: DiHtml5, color: "#E34F26" },
  { Icon: DiJava, color: "#ED8B00" },
  { Icon: DiDocker, color: "#2496ED" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiGraphql, color: "#E10098" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiAmazon, color: "#FF9900" },
  { Icon: SiKubernetes, color: "#326CE5" },
];

// Generate hanging icons - unique logos, no repeats
const generateHangingIcons = (count) => {
  const icons = [];
  const waveTypes = ['U', 'W', 'M', 'S'];
  // Shuffle tech logos to ensure unique selection
  const shuffledLogos = [...techLogos].sort(() => Math.random() - 0.5);
  const logoCount = Math.min(count, shuffledLogos.length);
  
  for (let i = 0; i < logoCount; i++) {
    const threadLength = 60 + Math.random() * 340;
    icons.push({
      id: i,
      ...shuffledLogos[i], // Use unique logo
      left: 5 + Math.random() * 90,
      delay: Math.random() * 1.5,
      threadLength: threadLength,
      size: 50 + Math.random() * 40, // Bigger size: 50-90px
      opacity: 0.6 + Math.random() * 0.3,
      waveType: waveTypes[Math.floor(Math.random() * waveTypes.length)],
      speed: 2 + Math.random() * 2,
    });
  }
  return icons;
};

// Animated Thread Component - Realistic physics
const AnimatedThread = ({ length, waveType, uniqueId, speed, delay = 0 }) => {
  const [elapsed, setElapsed] = useState(0);
  const animationRef = useRef();
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      setElapsed(elapsed);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Generate path with realistic physics
  const generatePath = () => {
    const width = 60;
    const midX = width / 2;
    
    // Time since this icon started falling (accounting for delay)
    const timeSinceDrop = Math.max(0, elapsed - delay);
    
    // Drop animation takes about 1.8s * 0.3 = 0.54s to reach bottom
    const dropTime = 0.54;
    
    // If still falling, thread is mostly straight (slight air resistance curve)
    if (timeSinceDrop < dropTime) {
      const fallProgress = timeSinceDrop / dropTime;
      // Very slight curve during fall (air resistance)
      const airCurve = Math.sin(fallProgress * Math.PI) * 3;
      return `M ${midX} 0 Q ${midX + airCurve} ${length * 0.5} ${midX} ${length}`;
    }
    
    // After landing - damped oscillation (wiggles that fade out)
    const timeSinceImpact = timeSinceDrop - dropTime;
    
    // Damping factor - oscillation dies down over time
    const damping = Math.exp(-timeSinceImpact * 0.8);
    
    // Initial amplitude on impact, decreases with damping
    const maxAmplitude = 15;
    const amplitude = maxAmplitude * damping;
    
    // Oscillation frequency (faster initially, slows down)
    const frequency = 4 + timeSinceImpact * 0.5;
    
    // Only wiggle if amplitude is significant
    if (amplitude < 0.5) {
      return `M ${midX} 0 L ${midX} ${length}`;
    }
    
    // Create natural wave based on impact
    const wave1 = Math.sin(timeSinceImpact * frequency * Math.PI * 2) * amplitude;
    const wave2 = Math.sin(timeSinceImpact * frequency * Math.PI * 2 + Math.PI * 0.7) * amplitude * 0.6;
    
    return `M ${midX} 0 Q ${midX + wave1} ${length * 0.4} ${midX + wave2} ${length * 0.7} Q ${midX - wave1 * 0.3} ${length * 0.9} ${midX} ${length}`;
  };

  return (
    <svg 
      className="curved-thread"
      width="60" 
      height={length}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`grad-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(199, 112, 240, 0.3)" />
          <stop offset="50%" stopColor="rgba(199, 112, 240, 0.7)" />
          <stop offset="100%" stopColor="rgba(199, 112, 240, 1)" />
        </linearGradient>
        <filter id={`glow-${uniqueId}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        d={generatePath()}
        stroke={`url(#grad-${uniqueId})`}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#glow-${uniqueId})`}
        strokeLinecap="round"
      />
    </svg>
  );
};

function Pre({ load }) {
  const [animationPhase, setAnimationPhase] = useState("initial");
  const [hangingIcons] = useState(() => generateHangingIcons(20));
  const name = "KRISH BHUVA";

  useEffect(() => {
    if (!load) return;

    const phase1Timer = setTimeout(() => {
      setAnimationPhase("revealing");
    }, 500);

    const phase2Timer = setTimeout(() => {
      setAnimationPhase("glowing");
    }, 3000);

    const phase3Timer = setTimeout(() => {
      setAnimationPhase("exit");
    }, 5500);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
    };
  }, [load]);

  if (!load && animationPhase === "exit") {
    return null;
  }

  return (
    <div
      className={`preloader-container ${animationPhase === "exit" ? "fade-out" : ""}`}
      id={load ? "preloader" : "preloader-none"}
    >
      {/* Hanging Tech Icons with Animated Curved Threads */}
      <div className="hanging-icons-container">
        {hangingIcons.map((icon) => (
          <div
            key={icon.id}
            className="hanging-icon-wrapper"
            style={{
              left: `${icon.left}%`,
              '--delay': `${icon.delay}s`,
            }}
          >
            {/* Animated Curved Thread */}
            <div 
              className="thread-wrapper"
              style={{ 
                height: `${icon.threadLength}px`,
                animationDelay: `${icon.delay}s`,
              }}
            >
              <AnimatedThread 
                length={icon.threadLength} 
                waveType={icon.waveType}
                uniqueId={icon.id}
                speed={icon.speed}
                delay={icon.delay}
              />
            </div>
            {/* The Icon */}
            <div
              className="hanging-icon"
              style={{
                fontSize: `${icon.size}px`,
                opacity: icon.opacity,
                color: icon.color,
                animationDelay: `${icon.delay}s`,
              }}
            >
              <icon.Icon />
            </div>
          </div>
        ))}
      </div>

      <div className="preloader-content">
        <div className="name-reveal">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={`letter ${animationPhase !== "initial" ? "visible" : ""} ${
                animationPhase === "glowing" ? "glow" : ""
              }`}
              style={{
                animationDelay: `${index * 0.08}s`,
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <div
          className={`tagline ${animationPhase === "glowing" ? "visible" : ""}`}
        >
          Code. Create. Conquer. 💪
        </div>
        <div className={`line-decoration ${animationPhase === "glowing" ? "expand" : ""}`}></div>
      </div>
    </div>
  );
}

export default Pre;
