import React from "react";
import { Row, Col } from "react-bootstrap";
import profileImg from "../../../../resources/images/Placeholder.png";
import "./../profileCard.css";

const FilmsProfCard = ({ item }) => {
  return (
    <Row className="profile-card d-flex justify-content-around align-items-center flex-column">
      <div className="profile-image" style={{ backgroundImage: `url(${profileImg})` }}></div>
      <Col xs={12} className="profile-main">
        <h1>{item.title}</h1>
      </Col>

      <Col md={6} xs={12}>
        <h2>Intro crawl:</h2>
        <h6>{item.opening_crawl}</h6>
      </Col>
      <Col md={6} xs={12}>
        <h2>Production data:</h2>
        <h5>Director: {item.director}</h5>
        <h5>Producer: {item.producer}</h5>
        <h5>Release date: {item.release_date}</h5>
      </Col>
    </Row>
  );
};

export default FilmsProfCard;
