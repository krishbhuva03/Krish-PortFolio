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
          Exploring my corporate journey through the work I’ve accomplished.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Automation Edge */}
          <Col md={8} style={{ maxWidth: "800px" }} className="work-card">
            <WorkCards
              title={
                <>Intern at <strong className="purple">Automation Edge</strong></>
              }
              description={
                <>
                  <p style={{ marginBottom: "8px" }}>
                    Baner, Pune, Maharashtra
                  </p>
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    <li style={{ marginBottom: "6px" }}>
                      Worked extensively with <strong className="purple">PostgreSQL</strong> 
                      for data storage, querying, and optimization.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Developed and maintained <strong className="purple">Java interfaces</strong> 
                      and data structures to handle complex business logic.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Processed and managed data retrieved from 
                      <strong className="purple"> REST API integrations</strong> 
                      for seamless backend workflows.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Implemented <strong className="purple">Java-based solutions</strong> 
                      to transform and utilize API response data efficiently.
                    </li>
                    <li>
                      Ensured clean, maintainable, and scalable code while working across 
                      <strong className="purple"> Java</strong> and 
                      <strong className="purple"> database-driven systems</strong>.
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
              description={
                <>
                  <p style={{ marginBottom: "8px" }}>
                    Vadodara, Gujarat
                  </p>
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    <li style={{ marginBottom: "6px" }}>
                      Built and optimized responsive web applications using the 
                      <strong className="purple"> MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Developed and integrated <strong className="purple">RESTful APIs</strong> 
                      to enable seamless communication between frontend and backend systems.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Worked with <strong className="purple">MongoDB</strong> 
                      for efficient data modeling, querying, and management of dynamic datasets.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Implemented reusable <strong className="purple">React.js components</strong> 
                      to ensure scalability and maintainability of the application.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Enhanced <strong className="purple">application performance</strong> 
                      through code optimization, state management, and API response handling.
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Collaborated with the team to <strong className="purple">debug, test, and deploy</strong> 
                      features, ensuring smooth project delivery.
                    </li>
                    <li>
                      Gained hands-on experience in 
                      <strong className="purple"> end-to-end web application development</strong>, 
                      from database design to frontend deployment.
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
