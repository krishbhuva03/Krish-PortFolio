import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import word from "../../Assets/Projects/word-mindmaster Background Removed.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import portfolio from "../../Assets/Projects/portfolio.jpeg";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect to load cards sequentially
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={10} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={airbnb}
                  isBlog={false}
                  title="Air BnB Clone"
                  timeline="Jan 2024 - Mar 2024"
                  technologies={["Java", "Spring Boot", "Hibernate", "PostgreSQL", "JWT", "JSP", "Thymeleaf"]}
                  description="I built an Airbnb clone web application where users can register, browse properties, filter by location, price, and amenities, and securely book rentals. Hosts can add and manage listings with details such as images, availability, and pricing. The project was developed using Java with Spring Boot and Hibernate for backend services and PostgreSQL for data storage, while authentication was managed using Spring Security with JWT. On the frontend, I used JSP/Thymeleaf for dynamic rendering and ensured a responsive UI. I also implemented real-time availability checks, validation layers, and RESTful APIs for seamless client–server communication. This project enhanced my expertise in Java-based full-stack development, focusing on API integration, database design, and building scalable, user-friendly applications."
                  demoLink="https://air-bnnb-jet.vercel.app/"
                />
              </motion.div>
            </Col>

            <Col md={10} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={portfolio}
                  isBlog={false}
                  title="CycleEase"
                  timeline="Sep 2023 - Nov 2023"
                  technologies={["React Native", "Node.js", "Express", "MongoDB"]}
                  description="CycleEase is a user-friendly period tracking app designed to simplify menstrual health management for women. It predicts upcoming cycles based on past data, ensuring accurate tracking and preparation. The app offers tailored wellness features, including personalized diet plans and health tips, addressing users' mood and pain levels during cycles. CycleEase emphasizes accessibility with its intuitive interface, making it easy to use for all age groups. Additionally, it provides detailed analytics, helping users understand their unique cycle patterns and make informed health decisions. By blending technology with care, CycleEase supports holistic well-being, empowering women to manage their menstrual health effectively."
                  ghLink="https://github.com/196170303023/CycleEase"
                />
              </motion.div>
            </Col>

            <Col md={10} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={portfolio}
                  isBlog={false}
                  title="Personal | Portfolio"
                  timeline="Jun 2023 - Aug 2023"
                  technologies={["React", "JavaScript", "HTML", "CSS"]}
                  description="I've developed a modern, responsive portfolio using React, JavaScript, HTML, and CSS to serve as a comprehensive platform for showcasing my professional journey. This portfolio highlights key aspects of my career, including my academic background, technical skills, major achievements, and the diverse projects I've worked on. Each section has been carefully designed to provide detailed insights, allowing visitors to understand my expertise and professional growth.

                  The portfolio features an intuitive, user-friendly interface with a clean design and smooth navigation, ensuring a seamless browsing experience. Visitors can explore my skills, view project details, and gain a clear understanding of how I approach problem-solving and development."
                  ghLink="https://github.com/196170303023/KrishPortFolio"
                />
              </motion.div>
            </Col>

            <Col md={10} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={word}
                  isBlog={false}
                  title="Word-Mastermind"
                  timeline="Mar 2023 - May 2023"
                  technologies={["React", "JavaScript", "CSS"]}
                  description="Word Mastermind is an engaging word-guessing game that challenges players to deduce a hidden target word. Players enter guesses, and the game provides immediate feedback for each letter: letters in the correct position are marked green, while correctly guessed but misplaced letters are highlighted in yellow. Unmatched letters remain unmarked, helping players refine their strategy as they progress. All guesses must be valid words, adding an element of linguistic skill and vocabulary knowledge. To enhance gameplay further, the on-screen keyboard dynamically updates, visually indicating letter statuses—present (green), absent (dark gray), or unknown (light gray), ensuring an interactive and intuitive experience."
                  demoLink="https://quinword.vercel.app/"
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
