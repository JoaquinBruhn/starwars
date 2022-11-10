import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import profileImg from "../../../resources/images/Placeholder.png";
import "./galaxyCard.css";

const GalaxyCard = ({ item, characterType }) => {
  return (
    <Col className="d-flex justify-content-center" md={6} xs={12}>
      <Link to={`/profile/${characterType}/${item.name ? item.name : item.title}`}>
        <div className="galaxy-card d-flex justify-content-around align-items-center flex-column mt-5">
          <div style={{ backgroundImage: `url(${profileImg})` }}></div>
          <h5>{item.name ? item.name : item.title}</h5>
        </div>
      </Link>
    </Col>
  );
};

export default GalaxyCard;
