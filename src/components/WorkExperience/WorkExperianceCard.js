import React from "react";
import { Terminal } from "../ui/Terminal";
import { AnimatedSpan } from "../ui/AnimatedSpan";

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
          <AnimatedSpan
            key={index}
            className="terminal-desc-item"
            delay={600 + index * 200}
          >
            <span className="check-mark">✔</span>
            {item}
          </AnimatedSpan>
        ))}
      </div>

      {/* Tech Stack — left aligned */}
      {techStack && techStack.length > 0 && (
        <AnimatedSpan
          className=""
          delay={600 + description.length * 200 + 200}
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
