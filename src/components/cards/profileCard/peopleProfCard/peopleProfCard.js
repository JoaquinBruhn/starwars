import React from "react";
import { Row, Col } from "react-bootstrap";
import profileImg from "../../../../resources/images/Placeholder.png";
import "./../profileCard.css";
const PeopleProfCard = ({ item }) => {
  return (
    <Row className="profile-card d-flex justify-content-around align-items-center flex-column">
      <div className="profile-image" style={{ backgroundImage: `url(${profileImg})` }}></div>
      <Col xs={12} className="profile-main">
        <h1>{item.name}</h1>
      </Col>
      <Row>
        <Col md={6} xs={12} className="my-3">
          <h2>Main data:</h2>
          <h5>Height: {item.height}</h5>
          <h5>Weight: {item.mass} Kg</h5>
          <h5>Gender: {item.gender}</h5>
          <h5>Birth year: {item.birth_year}</h5>
        </Col>
        <Col md={6} xs={12} className="my-3">
          <h2>Facial features:</h2>
          <h5>Hair color: {item.hair_color}</h5>
          <h5>Skin color: {item.skin_color}</h5>
          <h5>Eye color: {item.eye_color}</h5>
        </Col>
      </Row>
    </Row>
  );
};

export default PeopleProfCard;
