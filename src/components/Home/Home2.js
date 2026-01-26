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
import EncryptionText from "./EncryptionText";

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
              <EncryptionText 
                text="I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️" 
                speed={30}
              />
              <br />
              <br />
              <EncryptionText 
                text="I am fluent in classics like " 
                speed={30}
              />
              <i>
                <b className="purple">
                  <EncryptionText 
                    text="Java and Javascript." 
                    speed={30}
                  />
                </b>
              </i>
              <br />
              <br />
              <EncryptionText 
                text="My field of Interest's are building new " 
                speed={30}
              />
              <i>
                <b className="purple">
                  <EncryptionText 
                    text="Web Technologies and Products" 
                    speed={30}
                  />
                </b>
                <EncryptionText 
                  text=" and also in areas related to " 
                  speed={30}
                />
                <b className="purple">
                  <EncryptionText 
                    text="Machine Learning." 
                    speed={30}
                  />
                </b>
              </i>
              <br />
              <br />
              <EncryptionText 
                text="Whenever possible, I also apply my passion for developing products with " 
                speed={30}
              />
              <b className="purple">
                <i>
                  <EncryptionText 
                    text="Spring | SpringBoot | Hibernate" 
                    speed={30}
                  />
                </i>
              </b>
              <EncryptionText 
                text=" and " 
                speed={30}
              />
              <i>
                <b className="purple">
                  <EncryptionText 
                    text="Modern Javascript Library and Frameworks" 
                    speed={30}
                  />
                </b>
              </i>
              <EncryptionText 
                text=" like " 
                speed={30}
              />
              <i>
                <b className="purple">
                  <EncryptionText 
                    text="React.js" 
                    speed={30}
                  />
                </b>
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
