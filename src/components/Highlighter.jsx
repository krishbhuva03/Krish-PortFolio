import React from "react";
import "./Highlighter.css";

export default function Highlighter({
  children,
  color = "#fff59d",
  action = "highlight",
  animate = false,
}) {
  const classNames = ["highlighter", `highlighter-${action}`];
  if (animate) classNames.push("highlighter-animate");

  return (
    <span
      className={classNames.join(" ")}
      style={{ "--highlight-color": color }}
    >
      {children}
    </span>
  );
}
