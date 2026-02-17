import React from "react";

export function Terminal({ children, className = "" }) {
  return (
    <div className={`terminal-container ${className}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button terminal-close"></span>
          <span className="terminal-button terminal-minimize"></span>
          <span className="terminal-button terminal-maximize"></span>
        </div>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
