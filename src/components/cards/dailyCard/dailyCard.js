import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { reqRndmChar } from "../../../rquests/recData";
import "./dailyCard.css";

const DailyCard = ({ type }) => {
  const [characterType, setCharacterType] = useState(type);
  const [character, setCharacter] = useState("");

  useEffect(() => {
    async function getObject(prop) {
      const res = await reqRndmChar(prop);
      console.log(res);
      if (res.detail) {
        setCharacterType("not found");
      } else {
        setCharacter(res);
      }
    }
    getObject(type);
  }, [type]);

  switch (characterType) {
    case "people":
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>Character:</h4>
          <div className="char-info">
            <h5>{character.name ? character.name : ". . .loading"}</h5>
            <p>Year of birth: {character.birth_year ? character.birth_year : ". . .loading"}</p>
            <p>Height: {character.height ? character.height : ". . .loading"}</p>
            <p>Weight: {character.mass ? character.mass + " Kg" : ". . .loading"} </p>
          </div>
        </Col>
      );
    case "planets":
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>Planet:</h4>
          <div className="char-info">
            <h5>{character.name ? character.name : ". . .loading"}</h5>
            <p>Diameter: {character.diameter ? character.diameter : ". . .loading"}</p>
            <p>Gravity: {character.gravity ? character.gravity : ". . .loading"}</p>
            <p>Climate: {character.climate ? character.climate : ". . .loading"}</p>
            <p>Terrain: {character.terrain ? character.terrain : ". . .loading"} </p>
            <p>Population: {character.population ? character.population : ". . .loading"}</p>
          </div>
        </Col>
      );
    case "starships":
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>Starship:</h4>
          <div className="char-info">
            <h5>{character.name ? character.name : ". . .loading"}</h5>
            <p>Model: {character.model ? character.model : ". . .loading"}</p>
            <p>Manufacturer: {character.manufacturer ? character.manufacturer : ". . .loading"}</p>
            <p>Cost: {character.cost_in_credits ? character.cost_in_credits + " credits" : ". . .loading"}</p>
            <p>Length: {character.length ? character.length + " Kg" : ". . .loading"} </p>
            <p>Hyperdrive rating: {character.hyperdrive_rating ? character.hyperdrive_rating : ". . .loading"}</p>
          </div>
        </Col>
      );

    default:
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>{type === "starships" ? "Starship:" : type === "planets" ? "Planet" : `${type}:`} </h4>
          <h5 className="char-info">Unknown</h5>
        </Col>
      );
  }
};

export default DailyCard;
