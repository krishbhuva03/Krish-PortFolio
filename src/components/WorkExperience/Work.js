import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkExperianceCard";
import Particle from "../Particle";
import { Highlighter } from "../ui/highlighter";

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
          <Col md={8} style={{ maxWidth: "800px" }} className="work-card">
            <WorkCards
              title={
                <>Programmer Analyst Trainee at <strong className="purple">Cognizant</strong></>
              }
              date="05 Feb 2026 - Present"
              city="Siruseri, Chennai, Tamil Nadu"
              description={
                <>
                  <p style={{ marginBottom: "8px", fontStyle: "italic" }}>
                    Currently working...
                  </p>
                </>
              }
            />
          </Col>

          {/* Automation Edge */}
          <Col md={8} style={{ maxWidth: "800px" }} className="work-card">
            <WorkCards
              title={
                <>Intern at <strong className="purple">Automation Edge</strong></>
              }
              date=" 21 May 2025 - 01 Nov 2025"
              city="Baner, Pune, Maharashtra"
              description={
                <>
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    <li style={{ marginBottom: "6px" }}>
                      Worked extensively with{" "}
                      <Highlighter action="highlight" color="#336791">
                        PostgreSQL
                      </Highlighter>{" "}
                      for data storage, querying, and optimization.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Developed and maintained{" "}
                      <Highlighter action="underline" color="#f89820">
                        Java interfaces
                      </Highlighter>{" "}
                      and data structures to handle complex business logic.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Processed and managed data retrieved from{" "}
                      <Highlighter action="highlight" color="#87CEFA">
                        REST API integrations
                      </Highlighter>{" "}
                      for seamless backend workflows.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Implemented{" "}
                      <Highlighter action="underline" color="#f89820">
                        Java-based solutions
                      </Highlighter>{" "}
                      to transform and utilize API response data efficiently.
                    </li>
                    <li>
                      Ensured clean, maintainable, and scalable code while working across{" "}
                      <Highlighter action="highlight" color="#FF9800">
                        Java and database-driven systems
                      </Highlighter>
                      .
                    </li>
                  </ul>
                </>
              }
            />
          </Col>

          {/* Digital Raise */}
          <Col md={8} style={{ maxWidth: "800px" }} className="work-card">
            <WorkCards
              title={
                <>MERN Stack Developer at <strong className="purple">Digital Raise</strong></>
              }
              date="01 Jan 2025 - 01 Apr 2025"
              city="Vadodara, Gujarat"
              description={
                <>
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    <li style={{ marginBottom: "6px" }}>
                      Built and optimized responsive web applications using the{" "}
                      <Highlighter action="highlight" color="#00D084">
                        MERN Stack (MongoDB, Express.js, React.js, Node.js)
                      </Highlighter>
                      .
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Developed and integrated{" "}
                      <Highlighter action="underline" color="#87CEFA">
                        RESTful APIs
                      </Highlighter>{" "}
                      to enable seamless communication between frontend and backend systems.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Worked with{" "}
                      <Highlighter action="highlight" color="#4DB33D">
                        MongoDB
                      </Highlighter>{" "}
                      for efficient data modeling, querying, and management of dynamic datasets.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Implemented reusable{" "}
                      <Highlighter action="underline" color="#61DAFB">
                        React.js components
                      </Highlighter>{" "}
                      to ensure scalability and maintainability of the application.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Enhanced{" "}
                      <Highlighter action="highlight" color="#FF6B9D">
                        application performance
                      </Highlighter>{" "}
                      through code optimization, state management, and API response handling.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Collaborated with the team to{" "}
                      <Highlighter action="underline" color="#9D50BB">
                        debug, test, and deploy
                      </Highlighter>{" "}
                      features, ensuring smooth project delivery.
                    </li>
                    <li>
                      Gained hands-on experience in{" "}
                      <Highlighter action="highlight" color="#87CEFA">
                        end-to-end web application development
                      </Highlighter>
                      , from database design to frontend deployment.
                    </li>
                  </ul>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
