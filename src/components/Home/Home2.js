import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Highlighter } from "../ui/highlighter";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like{" "}
              <i>
                <Highlighter action="underline" color="#FF9800">
                  Java and Javascript.
                </Highlighter>
              </i>
              <br />
              <br />
              My field of Interest's are building new{" "}
              <i>
                <Highlighter action="highlight" color="#4A9EFF">
                  Web Technologies and Products
                </Highlighter>
                {" "}and also in areas related to{" "}
                <Highlighter action="highlight" color="#FF4081">
                  Machine Learning.
                </Highlighter>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with{" "}
              <i>
                <Highlighter action="underline" color="#9D50BB">
                  Spring | SpringBoot | Hibernate
                </Highlighter>
              </i>
              {" "}and{" "}
              <i>
                <Highlighter action="highlight" color="#87CEFA">
                  Modern Javascript Library and Frameworks
                </Highlighter>
              </i>
              {" "}like{" "}
              <i>
                <Highlighter action="underline" color="#00BCD4">
                  React.js
                </Highlighter>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/krishbhuva03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KrishBhuva3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/krish-bhuva/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/krish_bhuva__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
