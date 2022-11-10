import React from "react";
import { Row, Col } from "react-bootstrap";
import profileImg from "../../../../resources/images/Placeholder.png";
import "./../profileCard.css";

const PlanetsProfCard = ({ item }) => {
  return (
    <Row className="profile-card d-flex justify-content-around align-items-center flex-column">
      <div className="profile-image" style={{ backgroundImage: `url(${profileImg})` }}></div>
      <Col xs={12} className="profile-main">
        <h1>{item.name}</h1>
      </Col>
      <Row>
        <Col md={6} xs={12} className="my-3">
          <h2>Orbital data:</h2>
          <h5>Rotation period: {item.rotation_period}</h5>
          <h5>Orbital Period: {item.orbital_period}</h5>
          <h5>Diameter: {item.diameter}</h5>
          <h5>Gravity: {item.gravity}</h5>
        </Col>
        <Col md={6} xs={12} className="my-3">
          <h2>Surface data:</h2>
          <h5>Climate: {item.climate}</h5>
          <h5>Terrain: {item.terrain}</h5>
          <h5>Surface water: {item.surface_water}</h5>
          <h5>Population: {item.population}</h5>
        </Col>
      </Row>
    </Row>
  );
};

export default PlanetsProfCard;
