import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCards(props) {
  return (
    <Card className="education-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "centre" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      </Card.Body>
    </Card>
  );
}
export default EducationCards;
