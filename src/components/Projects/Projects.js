import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import word from "../../Assets/Projects/word-mindmaster Background Removed.png";
import women from "../../Assets/Projects/women.png"
import airbnb from "../../Assets/Projects/airbnb.png"
import portfolio from "../../Assets/Projects/portfolio.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Air BnB Clone"
              description="I built an Airbnb clone web application where users can register, browse properties, filter by location, price, and amenities, and securely book rentals. Hosts can add and manage listings with details such as images, availability, and pricing. The project was developed using Java with Spring Boot and Hibernate for backend services and PostgreSQL for data storage, while authentication was managed using Spring Security with JWT. On the frontend, I used JSP/Thymeleaf for dynamic rendering and ensured a responsive UI. I also implemented real-time availability checks, validation layers, and RESTful APIs for seamless client–server communication. This project enhanced my expertise in Java-based full-stack development, focusing on API integration, database design, and building scalable, user-friendly applications."
              ghLink="https://air-bnnb-jet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={women}
              isBlog={false}
              title="CycleEase"
              description="CycleEase is a user-friendly period tracking app designed to simplify menstrual health management for women. It predicts upcoming cycles based on past data, ensuring accurate tracking and preparation. The app offers tailored wellness features, including personalized diet plans and health tips, addressing users' mood and pain levels during cycles. CycleEase emphasizes accessibility with its intuitive interface, making it easy to use for all age groups. Additionally, it provides detailed analytics, helping users understand their unique cycle patterns and make informed health decisions. By blending technology with care, CycleEase supports holistic well-being, empowering women to manage their menstrual health effectively."
              ghLink="https://github.com/196170303023/CycleEase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal | Portfolio"
              description="I’ve developed a modern, responsive portfolio using React, JavaScript, HTML, and CSS to serve as a comprehensive platform for showcasing my professional journey. This portfolio highlights key aspects of my career, including my academic background, technical skills, major achievements, and the diverse projects I’ve worked on. Each section has been carefully designed to provide detailed insights, allowing visitors to understand my expertise and professional growth.

              The portfolio features an intuitive, user-friendly interface with a clean design and smooth navigation, ensuring a seamless browsing experience. Visitors can explore my skills, view project details, and gain a clear understanding of how I approach problem-solving and development."
              ghLink="https://github.com/196170303023/KrishPortFolio"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word}
              isBlog={false}
              title="Word-Mastermind"
              description="Word Mastermind is an engaging word-guessing game that challenges players to deduce a hidden target word. Players enter guesses, and the game provides immediate feedback for each letter: letters in the correct position are marked green, while correctly guessed but misplaced letters are highlighted in yellow. Unmatched letters remain unmarked, helping players refine their strategy as they progress. All guesses must be valid words, adding an element of linguistic skill and vocabulary knowledge. To enhance gameplay further, the on-screen keyboard dynamically updates, visually indicating letter statuses—present (green), absent (dark gray), or unknown (light gray), ensuring an interactive and intuitive experience."
              ghLink="https://quinword.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
