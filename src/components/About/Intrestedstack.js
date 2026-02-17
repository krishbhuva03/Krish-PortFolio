import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiKalilinux } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const interestedItems = [
  { icon: <GiBrain />, name: "AI / ML" },
  { icon: <MdSecurity />, name: "Cybersecurity" },
  { icon: <SiKalilinux />, name: "Kali Linux" },
];

function Intrestedstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {interestedItems.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {item.icon}
          <p className="tech-icon-label">{item.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Intrestedstack;
