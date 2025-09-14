import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
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
              description={
                <>
                  Parul University of - Vadodara
                  <br />
                  Computer Science Engineering | 2022-2025
                  <br />
                  CGPA: 7.66
                </>
              }
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              title="Diploma"
              description={
                <>
                  Goverment Polytechnics - Ahmadabad
                  <br />
                  Bio-Medical Engineering | 2019-2022
                  <br />
                  CGPA: 7.54
                </>
              }
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              title="Secondary School Examination"
              description={
                <>
                  Kendriya Vidyalaya Air Station - Samana
                  <br />
                  CBSE | 2019
                  <br />
                  Percentage: 62%
                </>
              }
            />
          </Col>

      <h1 className="education-heading">
          Courses And <strong className="purple">Certifications </strong>
      </h1>
      <p style={{ color: "white" }}>
      Here is an overview of the courses and certifications I’ve completed throughout my B.Tech to enhance my technical skills and expertise.
      </p>

          <Col md={4} className="education-card">
            <EducationCard
              title="Udemy"
              description={
                <>
                  The Complete 2024 Web Development Bootcamp
                  <br />
                  Nov 2023 - Apr 2024
                </>
              }
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="Udemy"
              description={
                <>
                  Comprehensive JavaScript Course: From Beginner to Full Stack Pro
                  <br />
                  May 2024 - Jun 2024
                </>
              }
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="Udemy"
              description={
                <>
                  Python Basics and Advanced Concepts in a Comprehensive Python Course
                  <br />
                  July 2024 - Sept 2024
                </>
              }
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              title="Coursera"
              description={
                <>
                  JavaScript Programming Language In-depth With CSS
                  <br />
                  Oct 2024 - Nov 2024
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EducationProjects;