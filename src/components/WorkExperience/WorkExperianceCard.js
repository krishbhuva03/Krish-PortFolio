import React from "react";
import { Terminal } from "../ui/Terminal";
import { AnimatedSpan } from "../ui/AnimatedSpan";
import { TypingAnimation } from "../ui/TypingAnimation";

function WorkCards({ role, company, date, city, description, techStack }) {
  return (
    <Terminal>
      {/* Top row: Role/Company (left) + Date/Address (right) */}
      <AnimatedSpan className="terminal-top-row" delay={0}>
        <div className="terminal-left">
          <div className="terminal-role-line">
            <span style={{ color: "#e2e8f0" }}>{`> ${role} @ `}</span>
            <span className="purple">{company}</span>
          </div>
        </div>
        <div className="terminal-right">
          <div className="terminal-meta">📅 {date}</div>
          <div className="terminal-meta">📍 {city}</div>
        </div>
      </AnimatedSpan>

      {/* Divider */}
      <AnimatedSpan delay={400}>
        <hr className="terminal-divider" />
      </AnimatedSpan>

      {/* Description bullets — centered */}
      <div className="terminal-desc-center">
        {description.map((item, index) => (
          <div key={index} className="terminal-desc-item" style={{ display: "flex", gap: "8px" }}>
            <AnimatedSpan delay={600 + index * 800}>
              <span className="check-mark">✔</span>
            </AnimatedSpan>
            <TypingAnimation delay={800 + index * 800} speed={20} className="">
              {item}
            </TypingAnimation>
          </div>
        ))}
      </div>

      {/* Tech Stack — left aligned */}
      {techStack && techStack.length > 0 && (
        <AnimatedSpan
          className=""
          delay={600 + description.length * 800 + 400}
        >
          <div className="terminal-tech-label">🛠 Tech Stack:</div>
          <div className="terminal-tech-tags">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSpan>
      )}
    </Terminal>
  );
}

export default WorkCards;
