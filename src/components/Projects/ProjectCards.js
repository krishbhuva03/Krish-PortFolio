import React, { useState, useEffect, useCallback, useRef } from "react";
import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AnimatedSpan } from "../ui/AnimatedSpan";
import { TypingAnimation } from "../ui/TypingAnimation";
import "./ProjectCards.css";

const IMG_MIN = 80;
const IMG_MAX = 480;
const IMG_DEFAULT = 240;

function ProjectSpotlight({ projects }) {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [imgHeight, setImgHeight] = useState(IMG_DEFAULT);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef(null);
  const dragStartY = useRef(null);
  const dragStartH = useRef(null);
  const cardRef = useRef(null);

  const total = projects.length;

  const goTo = useCallback(
    (index) => {
      const next = (index + total) % total;
      setCurrent(next);
      setAnimKey((k) => k + 1);
    },
    [total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // ── Keyboard navigation + Escape for lightbox ──
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") { setLightboxOpen(false); return; }
      if (isDragging || lightboxOpen) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next, isDragging, lightboxOpen]);

  // ── Swipe navigation ──
  const handleTouchStart = (e) => {
    // Don't start swipe if touching the divider
    if (e.target.closest(".resize-divider")) return;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  // ── Resize divider — mouse ──
  const onDividerMouseDown = (e) => {
    e.preventDefault();
    dragStartY.current = e.clientY;
    dragStartH.current = imgHeight;
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e) => {
      const delta = e.clientY - dragStartY.current;
      const newH = Math.min(IMG_MAX, Math.max(IMG_MIN, dragStartH.current + delta));
      setImgHeight(newH);
    };
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  // ── Resize divider — touch ──
  const onDividerTouchStart = (e) => {
    e.stopPropagation();
    dragStartY.current = e.touches[0].clientY;
    dragStartH.current = imgHeight;
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onTouchMove = (e) => {
      const delta = e.touches[0].clientY - dragStartY.current;
      const newH = Math.min(IMG_MAX, Math.max(IMG_MIN, dragStartH.current + delta));
      setImgHeight(newH);
    };
    const onTouchEnd = () => setIsDragging(false);

    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging]);

  const project = projects[current];

  return (
    <>
    <div className="spotlight-stage">
      {/* ── Desktop fixed arrows ── */}
      <button
        className="nav-arrow nav-arrow--left"
        onClick={prev}
        aria-label="Previous project"
      >
        <BsChevronLeft />
      </button>

      <button
        className="nav-arrow nav-arrow--right"
        onClick={next}
        aria-label="Next project"
      >
        <BsChevronRight />
      </button>

      {/* ── Mobile inline arrow row ── */}
      <div className="mobile-nav-row">
        <button className="nav-arrow nav-arrow--mobile" onClick={prev} aria-label="Previous project">
          <BsChevronLeft />
        </button>
        <span className="position-counter">{current + 1} / {total}</span>
        <button className="nav-arrow nav-arrow--mobile" onClick={next} aria-label="Next project">
          <BsChevronRight />
        </button>
      </div>

      {/* ── Spotlight card ── */}
      <div
        key={animKey}
        ref={cardRef}
        className={`spotlight-card${isDragging ? " is-resizing" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Thumbnail */}
        <div
          className="spotlight-img-wrap"
          style={{ height: imgHeight }}
          onClick={() => setLightboxOpen(true)}
          title="Click to view full image"
        >
          <img
            src={project.imgPath}
            alt={project.title}
            className="spotlight-img"
          />
          <div className="spotlight-img-overlay" />
          <div className="img-expand-hint">&#x26F6; View full image</div>
        </div>

        {/* ── Resize divider ── */}
        <div
          className={`resize-divider${isDragging ? " resize-divider--active" : ""}`}
          onMouseDown={onDividerMouseDown}
          onTouchStart={onDividerTouchStart}
          title="Drag to resize"
        >
          <div className="resize-divider-track">
            <span className="resize-grip-dot" />
            <span className="resize-grip-dot" />
            <span className="resize-grip-dot" />
          </div>
        </div>

        {/* Content */}
        <div className="spotlight-content">
          <div className="spotlight-header">
            <h2 className="spotlight-title">{project.title}</h2>
            {project.timeline && (
              <span className="spotlight-timeline">{project.timeline}</span>
            )}
          </div>

          <div className="spotlight-bullets">
            {Array.isArray(project.description)
              ? project.description.map((point, i) => (
                  <div key={i} className="spotlight-bullet-item">
                    <AnimatedSpan delay={i * 300}>
                      <span className="check-mark">✔</span>
                    </AnimatedSpan>
                    <TypingAnimation delay={100 + i * 300} speed={18} className="spotlight-bullet-text">
                      {point}
                    </TypingAnimation>
                  </div>
                ))
              : (
                  <div className="spotlight-bullet-item">
                    <AnimatedSpan delay={0}>
                      <span className="check-mark">✔</span>
                    </AnimatedSpan>
                    <TypingAnimation delay={100} speed={18} className="spotlight-bullet-text">
                      {project.description}
                    </TypingAnimation>
                  </div>
                )
            }
          </div>

          {/* Tech pills */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="spotlight-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="spotlight-links">
            {project.ghLink && (
              <a
                href={project.ghLink}
                target="_blank"
                rel="noreferrer"
                className="spotlight-btn spotlight-btn--ghost"
              >
                <BsGithub size={17} />
                GitHub
              </a>
            )}
            {!project.isBlog && project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="spotlight-btn spotlight-btn--accent"
              >
                <CgWebsite size={17} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Dot indicators + counter ── */}
      <div className="spotlight-footer">
        <div className="dot-row">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`dot${i === current ? " dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <span className="position-counter position-counter--desktop">
          {current + 1} / {total}
        </span>
      </div>
    </div>

    {/* ── Lightbox ── */}
    {lightboxOpen && (
      <div
        className="lightbox-backdrop"
        onClick={() => setLightboxOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Full image view"
      >
        <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={project.imgPath}
            alt={project.title}
            className="lightbox-img"
          />
          <p className="lightbox-caption">{project.title}</p>
        </div>
      </div>
    )}
    </>
  );
}

export default ProjectSpotlight;
