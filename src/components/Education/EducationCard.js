import React from "react";
import { motion } from "framer-motion";

function EducationCard({ title, subtitle, date, score, isCourse = false, index }) {
  const glowColor = "#c770f0";
  const lightGlow = "#e2a5ff";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 25px 2px ${glowColor}40, inset 0 0 15px 1px ${glowColor}20`,
        borderColor: lightGlow
      }}
      style={{
        position: "relative",
        margin: "0 auto 1.5rem",
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        borderRadius: "16px",
        background: "rgba(17, 16, 25, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${glowColor}40`,
        padding: "1.5rem",
        overflow: "hidden",
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 10px 0 ${glowColor}20`,
        zIndex: 1,
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "default"
      }}
    >
      {/* Decorative background glow */}
      <div 
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "150px",
          height: "150px",
          background: `radial-gradient(circle, ${glowColor}30 0%, transparent 70%)`,
          filter: "blur(20px)",
          zIndex: -1,
          borderRadius: "50%"
        }}
      />

      {/* Header Section */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", position: "relative" }}>
        
        {/* Glowing Orb / Index */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          style={{
            minWidth: "3rem",
            height: "3rem",
            borderRadius: "50%",
            background: `linear-gradient(135deg, #623686, ${glowColor})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            fontWeight: "900",
            fontFamily: "monospace",
            color: "white",
            boxShadow: `0 0 15px ${glowColor}80, inset 0 0 8px ${lightGlow}`,
            border: `2px solid ${lightGlow}60`,
            textShadow: `0 0 5px white`,
            position: "relative",
            zIndex: 2
          }}
        >
          {index || 1}
        </motion.div>

        {/* Title & Subtitle */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem", paddingTop: "0.25rem" }}>
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              margin: 0,
              fontSize: "1.35rem",
              fontWeight: "800",
              color: lightGlow,
              textTransform: "uppercase",
              letterSpacing: "1px",
              textShadow: `0 0 10px ${glowColor}80`,
              lineHeight: 1.2
            }}
          >
            {title}
          </motion.h2>

          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              margin: 0,
              fontSize: "1.05rem",
              fontWeight: "600",
              color: "#e0e0e0",
              letterSpacing: "0.5px",
              lineHeight: 1.3
            }}
          >
            {subtitle}
          </motion.h3>
        </div>
      </div>

      {/* Date & Content Section - Aligning it next to the line */}
      <div style={{ position: "relative" }}>
        {/* Connecting Vertical Line from Orb */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 1rem)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            position: "absolute",
            left: "1.45rem", /* Center of the 3rem orb */
            top: "-1rem",    /* Reach up towards the orb */
            width: "3px",
            background: `linear-gradient(to bottom, ${lightGlow}80, ${glowColor}20, transparent)`,
            borderRadius: "2px",
            boxShadow: `0 0 8px ${glowColor}60`
          }} 
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            paddingLeft: "4.25rem", /* Content aligns with text, missing the orb and line */
            paddingTop: "0.5rem"
          }}
        >
          {/* Date Badge */}
          <div style={{
            display: "inline-block",
            fontSize: "0.85rem",
            color: "#aaa",
            fontFamily: "monospace",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "0.35rem 0.6rem",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.15)",
            alignSelf: "flex-start",
            letterSpacing: "1px",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)"
          }}>
            {date}
          </div>

          {/* Score Badge */}
          {score && (
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                backgroundColor: `rgba(199, 112, 240, 0.15)`,
                border: `1px solid ${glowColor}50`,
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                alignSelf: "flex-start",
                boxShadow: `0 0 15px ${glowColor}20, inset 0 0 10px ${glowColor}10`,
                backdropFilter: "blur(8px)"
              }}
            >
              <span style={{ 
                fontSize: "0.85rem", 
                color: "#ccc", 
                textTransform: "uppercase", 
                letterSpacing: "1px",
                fontWeight: "600"
              }}>
                {isCourse ? "Platform" : "Grade"}
              </span>
              <span style={{ 
                fontWeight: "900", 
                color: "white", 
                textShadow: `0 0 12px ${lightGlow}, 0 0 4px white`,
                fontSize: "1.1rem"
              }}>
                {score}
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default EducationCard;
