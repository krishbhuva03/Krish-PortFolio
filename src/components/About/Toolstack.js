import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiLinux,
  SiDocker,
  SiEclipseche,
  SiApachenetbeanside,
  SiVercel,
  SiVmware,
  SiMacos,
  SiIntellijidea,
  SiInsomnia,
  SiSelenium,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";

const toolItems = [
  { icon: <SiMacos />, name: "macOS" },
  { icon: <SiLinux />, name: "Linux" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <BiLogoVisualStudio />, name: "VS Code" },
  { icon: <SiIntellijidea />, name: "IntelliJ" },
  { icon: <SiEclipseche />, name: "Eclipse" },
  { icon: <SiApachenetbeanside />, name: "NetBeans" },
  { icon: <SiSelenium />, name: "Selenium" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiInsomnia />, name: "Insomnia" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiVmware />, name: "VMware" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolItems.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {item.icon}
          <p className="tech-icon-label">{item.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
