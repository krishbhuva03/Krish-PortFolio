import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectSpotlight from "./ProjectCards";
import Particle from "../Particle";
import word from "../../Assets/Projects/wordmaster.png";
import roamlie from "../../Assets/Projects/roamlie.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import cycleease from "../../Assets/Projects/cycleease.png";
import csvImporter from "../../Assets/Projects/AI powered CSV Importer.png";
import concurrencyBooking from "../../Assets/Projects/Concurrency Ticket booking.png";

const projects = [
  {
    imgPath: concurrencyBooking,
    isBlog: false,
    title: "Concurrent Ticket Booking System",
    timeline: "Jun 2024 – Jul 2024",
    technologies: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Java 21",
      "Redisson",
      "Spring Security",
      "Flyway",
      "Swagger/OpenAPI",
      "Hibernate",
    ],
    description: [
      "Engineered a production-grade train ticket booking platform handling high-concurrency ticket reservations safely.",
      "Implemented dual-layer locking using Redisson Redis distributed locks and PostgreSQL FOR UPDATE SKIP LOCKED row locks.",
      "Prevented transaction deadlocks by sorting seat IDs globally prior to lock acquisition.",
      "Decoupled booking confirmation and waitlist promotions asynchronously via RabbitMQ queue pipelines.",
      "Secured API endpoints with Spring Security and managed structured database schemas via Flyway migrations.",
      "Designed and documented RESTful APIs with Swagger/OpenAPI, tested with integration test suites.",
      "Built a React + Vite frontend to query real-time stop-traversals and coach availability schedules.",
    ],
    ghLink: "https://github.com/krishbhuva03/concurreny-booking",
    demoLink: "https://booking-backend-production-fa08.up.railway.app/",
  },
  {
    imgPath: csvImporter,
    isBlog: false,
    title: "AI-Powered CSV Importer",
    timeline: "Apr 2024 – May 2024",
    technologies: [
      "Next.js 14",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Groq API",
      "Llama 3.3",
      "Gemini AI",
      "OpenAI API",
      "Multer",
      "CSV Parse",
      "Docker",
    ],
    description: [
      "Designed an AI-powered CSV import tool that maps uploaded data columns to GrowEasy CRM format using LLMs.",
      "Integrated Groq API (Llama 3.3 70B) to intelligently parse, map, and standardize raw customer contacts into CRM schemas.",
      "Built a 3-step dynamic frontend flow in Next.js, Tailwind CSS, and TypeScript for upload, interactive preview, and validation.",
      "Developed a Node.js & Express backend in TypeScript to handle file parsing and pipeline data transformation.",
      "Containerized the full-stack application using Docker and Docker Compose for simple local and production deployment.",
    ],
    ghLink: "https://github.com/krishbhuva03/ai-powered-csv-importer",
    demoLink: "https://csv-importer-frontend.onrender.com",
  },
  {
    imgPath: roamlie,
    isBlog: false,
    title: "Roamlie Vacation Rental Platform",
    timeline: "Jan 2024 – Mar 2024",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Redux Toolkit",
      "Material UI (MUI)",
      "Gemini AI",
      "JWT",
      "Axios",
      "Framer Motion",
    ],
    description: [
      "Built a full-stack vacation rental platform (Roamlie) featuring user profiles, property listings, and secure booking flows.",
      "Integrated Gemini AI (via Google Generative AI SDK) to suggest customized travel itineraries and local recommendations.",
      "Enabled real-time communications and chat notifications using Socket.io (WebSocket client-server synchronization).",
      "Managed global application state and persisted user sessions using Redux Toolkit and Redux Persist.",
      "Designed a sleek, responsive user interface with Material UI (MUI) components and Styled Components.",
      "Developed a robust Express.js API with Mongoose schemas and secure JSON Web Token (JWT) user authentication.",
    ],
    ghLink: "https://github.com/krishbhuva03/airbnb",
    demoLink: "https://roamlie.vercel.app/",
  },
  {
    imgPath: cycleease,
    isBlog: false,
    title: "CycleEase",
    timeline: "Sep 2023 – Nov 2023",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
    ],
    description: [
      "Designed a period tracking web application that predicts upcoming cycles based on historical user data.",
      "Built personalized wellness pages including exercise guides, diet plans, and health tips tailored to cycle moods.",
      "Created an intuitive, responsive frontend with HTML5, CSS3, JavaScript, and Bootstrap for seamless navigation.",
      "Developed a Node.js & Express.js backend with Mongoose schemas for secure user data and period log storage.",
      "Implemented secure user registration and login using JSON Web Tokens (JWT) and Bcrypt hashing.",
    ],
    ghLink: "https://github.com/196170303023/CycleEase",
    demoLink: "https://github.com/196170303023/CycleEase",
  },
  {
    imgPath: portfolio,
    isBlog: false,
    title: "Personal | Portfolio",
    timeline: "Jun 2023 – Aug 2023",
    technologies: [
      "React.js",
      "Three.js",
      "React Three Fiber",
      "React Spline",
      "GSAP",
      "Framer Motion",
      "Cobe Globe",
      "tsParticles",
      "Tilt.js",
      "React Bootstrap",
      "GitHub Calendar",
      "Typewriter-Effect",
    ],
    description: [
      "Built a modern, immersive developer portfolio using React.js, React Router, and React Bootstrap.",
      "Integrated interactive 3D components with Three.js, React Three Fiber, and Spline 3D scene files.",
      "Rendered a dynamic, responsive 3D WebGL globe utilizing Cobe and Canvas APIs.",
      "Created premium motion choreography with Framer Motion, GreenSock (GSAP), and Tilt.js parallax effects.",
      "Designed customized typewriter hero sequences, tsParticles backgrounds, and a live GitHub contribution calendar widget.",
    ],
    ghLink: "https://github.com/196170303023/KrishPortFolio",
    demoLink: "https://visitkrish.vercel.app/",
  },
  {
    imgPath: word,
    isBlog: false,
    title: "Word-Mastermind",
    timeline: "Mar 2023 – May 2023",
    technologies: [
      "React.js",
      "JavaScript (ES6)",
      "CSS3 Animations",
      "HTML5",
      "LocalStorage",
      "Vercel Deployment",
    ],
    description: [
      "Built an interactive word-guessing game (similar to Wordle) using React.js state hooks and CSS animations.",
      "Developed custom keyboard feedback mapping letter statuses (correct, misplaced, or absent) dynamically.",
      "Implemented local storage persistence to save user game statistics and daily guess streaks.",
      "Added custom CSS3 keyframe animations for flipping tiles and shake effects on invalid word submissions.",
    ],
    ghLink: "https://github.com/krishbhuva03/Word-Mastermind",
    demoLink: "https://quinword.vercel.app/",
  },
];

function Projects() {
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ProjectSpotlight projects={projects} />
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
