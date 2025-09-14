import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ✨ Hi Everyone, I am <span className="purple">Krish Bhuva </span>
            from  <span className="purple"> Jamnagar, Gujarat, India.</span>
            <br />
            <br />
             A creative problem solver who loves turning ideas into impactful digital experiences. From designing smooth user journeys to building projects that make life easier, I enjoy blending creativity, logic, and a touch of innovation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading and listening to Philosophers 📖🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Geo Enthusiast 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football ⚽️
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography & Editing 📸
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ⛰️
            </li>
          </ul>

          <p>The quote I live by</p>          
          <p style={{ color: "rgb(155 126 172)" }}>
            The world will ask you who you are, and if you do not know, the world will tell you.</p>
          <footer className="blockquote-footer">Carl Jung</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
