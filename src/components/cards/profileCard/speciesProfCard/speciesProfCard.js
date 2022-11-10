import React from "react";
import { Row, Col } from "react-bootstrap";
import profileImg from "../../../../resources/images/Placeholder.png";
import "./../profileCard.css";

const SpeciesProfCard = ({ item }) => {
  return (
    <Row className="profile-card d-flex justify-content-around align-items-center flex-column">
      <div className="profile-image" style={{ backgroundImage: `url(${profileImg})` }}></div>
      <Col xs={12} className="profile-main">
        <h1>{item.name}</h1>
      </Col>
      <Row>
        <Col md={6} xs={12} className="my-3">
          <h2>Biological characteristics:</h2>
          <h5>Clasification: {item.clasification}</h5>
          <h5>Designation: {item.designation}</h5>
          <h5>Average height: {item.average_height}</h5>
          <h5>Average Lifespan: {item.average_lifespan}</h5>
        </Col>
        <Col md={6} xs={12} className="my-3">
          <h2>External characteristics:</h2>
          <h5>Hair colors: {item.hair_colors}</h5>
          <h5>Skin colors: {item.skin_colors}</h5>
          <h5>Eye colors: {item.eye_colors}</h5>
          <h5>Language: {item.language}</h5>
        </Col>
      </Row>
    </Row>
  );
};

export default SpeciesProfCard;
