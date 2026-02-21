import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import Particle from "../Particle";

function EducationProjects() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
          Education <strong className="purple">Journey </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is an overview of my educational journey and the milestones I've achieved along the way.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="education-card">
            <EducationCard
              title="Bachelor of Technology"
              subtitle="Parul University - Vadodara"
              date="2022-2025"
              score="CGPA: 7.66"
              index={1}
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              title="Diploma"
              subtitle="Government Polytechnics - Ahmadabad"
              date="2019-2022"
              score="CGPA: 7.54"
              index={2}
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              title="Secondary School Examination"
              subtitle="Kendriya Vidyalaya Air Station - Samana"
              date="2019"
              score="62%"
              index={3}
            />
          </Col>
        </Row>

        <h1 className="education-heading">
          Courses And <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is an overview of the courses and certifications I've completed throughout my B.Tech to enhance my technical skills and expertise.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="education-card">
            <EducationCard
              title="FUNDAMENTALS OF GENERATIVE AI"
              subtitle="Cognizant"
              date="01 Jan 2026 - 01 March 2026"
              index={1}
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="JavaScript Programming Language In-depth With CSS"
              subtitle="Coursera"
              date="Oct 2024 - Nov 2024"
              index={2}
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="Python Basics and Advanced Concepts in a Comprehensive Python Course"
              subtitle="Udemy"
              date="July 2024 - Sept 2024"
              index={3}
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="Comprehensive JavaScript Course: From Beginner to Full Stack Pro"
              subtitle="Udemy"
              date="May 2024 - Jun 2024"
              index={4}
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="The Complete 2024 Web Development Bootcamp"
              subtitle="Udemy"
              date="Nov 2023 - Apr 2024"
              index={5}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default EducationProjects;