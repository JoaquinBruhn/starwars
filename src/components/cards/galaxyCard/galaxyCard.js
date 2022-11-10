import React from "react";
import { Col } from "react-bootstrap";
import profileImg from "../../../resources/images/Placeholder.png";
import "./galaxyCard.css";

const GalaxyCard = ({ item, characterType }) => {
  let cardfilling;
  switch (characterType) {
    case "people":
      cardfilling = <h5>{item.name}</h5>;
      break;
    case "planets":
      cardfilling = <h5>{item.name}</h5>;
      break;
    case "films":
      cardfilling = <h5>{item.title}</h5>;
      break;
    case "species":
      cardfilling = <h5>{item.name}</h5>;
      break;
    case "vehicles":
      cardfilling = <h5>{item.name}</h5>;
      break;
    case "starships":
      cardfilling = <h5>{item.name}</h5>;
      break;
    default:
      break;
  }

  return (
    <Col className="d-flex justify-content-center" md={6} xs={12}>
      <div className="galaxy-card d-flex justify-content-around align-items-center flex-column mt-5">
        <div style={{ backgroundImage: `url(${profileImg})` }}></div>
        {cardfilling}
      </div>
    </Col>
  );
};

export default GalaxyCard;
