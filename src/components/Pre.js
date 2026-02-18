import React, { useState, useEffect } from "react";
import "./Pre.css";
import IconCloud from "./ui/IconCloud";

const techIcons = [
  { slug: "typescript", color: "3178C6" },
  { slug: "javascript", color: "F7DF1E" },
  { slug: "java", color: "ED8B00" },
  { slug: "react", color: "61DAFB" },
  { slug: "html5", color: "E34F26" },
  { slug: "css3", color: "1572B6" },
  { slug: "nodedotjs", color: "339933" },
  { slug: "express", color: "FFFFFF" },
  { slug: "amazonaws", color: "FF9900" },
  { slug: "postgresql", color: "4169E1" },
  { slug: "firebase", color: "FFCA28" },
  { slug: "docker", color: "2496ED" },
  { slug: "git", color: "F05032" },
  { slug: "github", color: "FFFFFF" },
  { slug: "python", color: "3776AB" },
  { slug: "mongodb", color: "47A248" },
  { slug: "tailwindcss", color: "06B6D4" },
  { slug: "redux", color: "764ABC" },
  { slug: "graphql", color: "E10098" },
  { slug: "kubernetes", color: "326CE5" },
];

function Pre({ load }) {
  const [animationPhase, setAnimationPhase] = useState("initial");
  const name = "KRISH BHUVA";

  const images = techIcons.map(
    ({ slug, color }) => `https://cdn.simpleicons.org/${slug}/${color}`
  );

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
      {/* Upper section - Name + Tagline */}
      <div className="preloader-content preloader-upper">
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

      {/* Lower section - Icon Cloud */}
      <div className={`preloader-lower ${animationPhase !== "initial" ? "cloud-visible" : ""}`}>
        <IconCloud images={images} size={450} speed={0.005} />
      </div>
    </div>
  );
}

export default Pre;
