import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KRISH BHUVA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ position: "relative" }}>
                {/* Floating circles - purple */}
                <div style={{
                  position: "absolute", top: "-10px", left: "-15px", width: "30px", height: "30px",
                  borderRadius: "50%", backgroundColor: "#c770f0", opacity: 0.5,
                  animation: "float1 4s ease-in-out infinite"
                }} />
                <div style={{
                  position: "absolute", bottom: "30px", right: "-10px", width: "20px", height: "20px",
                  borderRadius: "50%", backgroundColor: "#c770f0", opacity: 0.4,
                  animation: "float2 3s ease-in-out infinite"
                }} />
                {/* Floating circles - teal */}
                <div style={{
                  position: "absolute", top: "40%", right: "-20px", width: "25px", height: "25px",
                  borderRadius: "50%", backgroundColor: "#2dc2a8", opacity: 0.5,
                  animation: "float3 5s ease-in-out infinite"
                }} />
                <div style={{
                  position: "absolute", bottom: "-5px", left: "20px", width: "15px", height: "15px",
                  borderRadius: "50%", backgroundColor: "#2dc2a8", opacity: 0.6,
                  animation: "float1 4s ease-in-out infinite"
                }} />
                {/* Hollow rings */}
                <div style={{
                  position: "absolute", top: "15%", left: "-25px", width: "40px", height: "40px",
                  borderRadius: "50%", border: "2px solid #c770f0", opacity: 0.3,
                  animation: "float2 3s ease-in-out infinite"
                }} />
                <div style={{
                  position: "absolute", bottom: "15%", right: "-15px", width: "35px", height: "35px",
                  borderRadius: "50%", border: "2px solid #2dc2a8", opacity: 0.3,
                  animation: "float3 5s ease-in-out infinite"
                }} />
                {/* Code symbols */}
                <div style={{
                  position: "absolute", top: "-20px", right: "30px",
                  fontFamily: "monospace", fontSize: "22px", color: "#c770f0", opacity: 0.35,
                  animation: "float1 4s ease-in-out infinite"
                }}>&lt;/&gt;</div>
                <div style={{
                  position: "absolute", bottom: "0px", left: "40%",
                  fontFamily: "monospace", fontSize: "20px", color: "#2dc2a8", opacity: 0.3,
                  animation: "float3 5s ease-in-out infinite"
                }}>&#123;&#125;</div>
                {/* Small pulsing dots */}
                <div style={{
                  position: "absolute", top: "25%", left: "-8px", width: "8px", height: "8px",
                  borderRadius: "50%", backgroundColor: "#c770f0", opacity: 0.7,
                  animation: "pulse 3s ease-in-out infinite"
                }} />
                <div style={{
                  position: "absolute", top: "60%", right: "-5px", width: "6px", height: "6px",
                  borderRadius: "50%", backgroundColor: "#2dc2a8", opacity: 0.7,
                  animation: "pulse 3s ease-in-out infinite 1s"
                }} />
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", position: "relative", zIndex: 1 }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
