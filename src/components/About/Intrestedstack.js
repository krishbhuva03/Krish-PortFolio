import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKalilinux
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

function Intrestedstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiBrain />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdSecurity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
    </Row>
  );
}

export default Intrestedstack;
