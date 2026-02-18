import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/file.svg";
import Tilt from "react-parallax-tilt";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Highlighter } from "../ui/highlighter";
import { FloatingDock } from "../ui/FloatingDock";

function Home2() {
  const socialLinks = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="dock-icon-color" style={{ width: "100%", height: "100%" }} />
      ),
      href: "https://github.com/krishbhuva03",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="dock-icon-color" style={{ width: "100%", height: "100%" }} />
      ),
      href: "https://twitter.com/KrishBhuva3",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="dock-icon-color" style={{ width: "100%", height: "100%" }} />
      ),
      href: "https://www.linkedin.com/in/krish-bhuva/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="dock-icon-color" style={{ width: "100%", height: "100%" }} />
      ),
      href: "https://www.instagram.com/krish_bhuva__",
    },
  ];

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
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  backgroundColor: "#c770f0",
                  borderRadius: "50%",
                  padding: "5px",
                  boxShadow:
                    "0 8px 20px rgba(199, 112, 240, 0.4), 0 15px 40px rgba(199, 112, 240, 0.2), inset 0 -4px 10px rgba(0, 0, 0, 0.15), inset 0 4px 10px rgba(255, 255, 255, 0.1)",
                  border: "3px solid rgba(255, 255, 255, 0.15)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "15px" }}>
              <FloatingDock items={socialLinks} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
