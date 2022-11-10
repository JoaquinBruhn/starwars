import React from "react";
import { Row, Col } from "react-bootstrap";
import profileImg from "../../../../resources/images/Placeholder.png";
import "./../profileCard.css";

const StarshipProfCard = ({ item }) => {
  return (
    <Row className="profile-card d-flex justify-content-around align-items-center flex-column">
      <div className="profile-image" style={{ backgroundImage: `url(${profileImg})` }}></div>
      <Col xs={12} className="profile-main">
        <h1>{item.name}</h1>
      </Col>

      <Col md={6} xs={12}>
        <h3>Specs:</h3>
        <h5>Model: {item.model}</h5>
        <h5>Manufacturer: {item.manufacturer}</h5>
        <h5>Max atmosphering speed: {item.max_atmosphering_speed}</h5>
        <h5>Hyperdrive rating: {item.hyperdrive_rating}</h5>
      </Col>
      <Col md={6} xs={12}>
        <h3>Capacity:</h3>
        <h5>Crew: {item.crew}</h5>
        <h5>Passengers: {item.passengers}</h5>
        <h5>Cargo capacity: {item.cargo_capacity}</h5>
        <h5>Consumables: {item.consumables}</h5>
      </Col>
      <Col>
        <h2>Cost: {item.cost_in_credits} credits</h2>
      </Col>
    </Row>
  );
};

export default StarshipProfCard;
