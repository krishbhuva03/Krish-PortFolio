import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkExperianceCard";
import Particle from "../Particle";

function Work() {
  return (
    <Container fluid className="work-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Exploring my corporate journey through the work I've accomplished.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Cognizant */}
          <Col md={8} style={{ maxWidth: "1050px" }} className="work-card">
            <WorkCards
              role="Programmer Analyst Trainee"
              company="Cognizant"
              date="05 Feb 2026 - Present"
              city="Siruseri, Chennai, Tamil Nadu"
              description={[
                "Currently working as a Programmer Analyst Trainee.",
              ]}
              techStack={[]}
            />
          </Col>

          {/* Automation Edge */}
          <Col md={8} style={{ maxWidth: "1050px" }} className="work-card">
            <WorkCards
              role="Intern"
              company="Automation Edge"
              date="21 May 2025 - 01 Nov 2025"
              city="Baner, Pune, Maharashtra"
              description={[
                "Worked extensively with PostgreSQL for data storage, querying, and optimization.",
                "Developed and maintained Java interfaces and data structures to handle complex business logic.",
                "Processed and managed data retrieved from REST API integrations for seamless backend workflows.",
                "Implemented Java-based solutions to transform and utilize API response data efficiently.",
                "Ensured clean, maintainable, and scalable code while working across Java and database-driven systems.",
              ]}
              techStack={["Java", "PostgreSQL", "REST APIs", "Spring Boot"]}
            />
          </Col>

          {/* Digital Raise */}
          <Col md={8} style={{ maxWidth: "1050px" }} className="work-card">
            <WorkCards
              role="MERN Stack Developer"
              company="Digital Raise"
              date="01 Jan 2025 - 01 Apr 2025"
              city="Vadodara, Gujarat"
              description={[
                "Built and optimized responsive web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
                "Developed and integrated RESTful APIs to enable seamless communication between frontend and backend systems.",
                "Worked with MongoDB for efficient data modeling, querying, and management of dynamic datasets.",
                "Implemented reusable React.js components to ensure scalability and maintainability of the application.",
                "Enhanced application performance through code optimization, state management, and API response handling.",
                "Collaborated with the team to debug, test, and deploy features, ensuring smooth project delivery.",
                "Gained hands-on experience in end-to-end web application development, from database design to frontend deployment.",
              ]}
              techStack={[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "JavaScript",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
