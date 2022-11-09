import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import coverChar from "../../../resources/images/5-2-star-wars-ship-vector-png.png";
import DailyCard from "../../cards/dailyCard/dailyCard";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Container fluid className="intro-container">
        <Row>
          <Col lg={6} xs={12}>
            <p className="cover-crawl">
              It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory
              against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the
              Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire
              planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian
              of the stolen plans that can save her people and restore freedom to the galaxy....
            </p>
          </Col>
          <Col lg={6} xs={12}>
            <img className="cover-character" src={coverChar} alt="cover character"></img>
          </Col>
        </Row>
        <Row className="daily-encounter">
          <h3>Encounter of the day</h3>
          <DailyCard type={"people"} />
          <DailyCard type={"people"} />
          <DailyCard type={"starships"} />
          <DailyCard type={"planets"} />
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Home;
