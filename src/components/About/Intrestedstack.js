import React from "react";
import { Col, Row } from "react-bootstrap";

import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineNoEncryption } from "react-icons/md";
import { SiKalilinux } from "react-icons/si";

function Intrestedstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <LuBrainCircuit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineNoEncryption />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
    </Row>
  );
}

export default Intrestedstack;
