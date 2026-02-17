import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiJava,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJqueryLogo,
  DiGit,
  DiGithub,
} from "react-icons/di";

import { TbApi } from "react-icons/tb";

import {
  SiSpring,
  SiGraphql,
  SiHibernate,
  SiFirebase,
  SiPostgresql,
  SiSocketdotio,
} from "react-icons/si";

const techItems = [
  { icon: <DiJava />, name: "Java" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiSpring />, name: "Spring" },
  { icon: <SiHibernate />, name: "Hibernate" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiJqueryLogo />, name: "jQuery" },
  { icon: <TbApi />, name: "REST API" },
  { icon: <SiGraphql />, name: "GraphQL" },
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <DiBootstrap />, name: "Bootstrap" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiGit />, name: "Git" },
  { icon: <DiGithub />, name: "GitHub" },
  { icon: <SiSocketdotio />, name: "Socket.io" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {item.icon}
          <p className="tech-icon-label">{item.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
