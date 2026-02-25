import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <div className="project-card-container">
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div className="project-card-wrapper">
          <div className="project-img-container">
            <img src={props.imgPath} alt={props.title} className="project-img" />
          </div>

          <div className="project-content">
            <h3 className="project-title">{props.title}</h3>
            
            {props.timeline && (
              <div className="project-timeline">
                {props.timeline}
              </div>
            )}

            <p className="project-description">
              {props.description}
            </p>

            {props.technologies && props.technologies.length > 0 && (
              <div className="project-tech-stack">
                {props.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-links-container">
              <a 
                href={props.ghLink} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-project btn-secondary-custom"
              >
                <BsGithub size={20} />
                {props.isBlog ? "Blog" : "GitHub"}
              </a>

              {!props.isBlog && props.demoLink && (
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project btn-primary-custom"
                >
                  <CgWebsite size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
