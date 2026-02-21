import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="project-card-view-distinct">
      <div className="project-image-layer">
        <img src={props.imgPath} alt="project-img" className="project-distinct-img" />
      </div>

      <div className="project-content-layer">
        <div>
          <h3 className="project-distinct-title">{props.title}</h3>
          {props.timeline && (
            <p className="project-timeline">
              {props.timeline}
            </p>
          )}

          <p className="project-distinct-description">
            {props.description}
          </p>

          {props.technologies && props.technologies.length > 0 && (
            <div className="project-technologies">
              {props.technologies.map((tech, index) => (
                <span key={index} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="project-links">
          <Button variant="primary" href={props.ghLink} target="_blank" className="project-action-btn">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-action-btn"
            >
              <CgWebsite /> &nbsp;
              {"Live Website"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
