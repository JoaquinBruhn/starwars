import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { reqRndmChar } from "../../../rquests/recData";
import "./dailyCard.css";

const DailyCard = ({ type }) => {
  const [characterType, setCharacterType] = useState(type);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getSearch(prop) {
      const res = await reqRndmChar(prop);
      if (res.detail) {
        setCharacterType("not found");
      } else {
        setSearch(res);
      }
    }
    getSearch(type);
  }, [type]);

  switch (characterType) {
    case "people":
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>Character:</h4>
          <div className="char-info">
            <h5>{search.name ? search.name : ". . .loading"}</h5>
            <p>Year of birth: {search.birth_year ? search.birth_year : ". . .loading"}</p>
            <p>Height: {search.height ? search.height : ". . .loading"}</p>
            <p>Weight: {search.mass ? search.mass + " Kg" : ". . .loading"} </p>
          </div>
        </Col>
      );
    case "planets":
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>Planet:</h4>
          <div className="char-info">
            <h5>{search.name ? search.name : ". . .loading"}</h5>
            <p>Diameter: {search.diameter ? search.diameter : ". . .loading"}</p>
            <p>Gravity: {search.gravity ? search.gravity : ". . .loading"}</p>
            <p>Climate: {search.climate ? search.climate : ". . .loading"}</p>
            <p>Terrain: {search.terrain ? search.terrain : ". . .loading"} </p>
            <p>Population: {search.population ? search.population : ". . .loading"}</p>
          </div>
        </Col>
      );
    case "starships":
      return (
        <Col className="daily-card" md={6} xs={12}>
          <h4>Starship:</h4>
          <div className="char-info">
            <h5>{search.name ? search.name : ". . .loading"}</h5>
            <p>Model: {search.model ? search.model : ". . .loading"}</p>
            <p>Manufacturer: {search.manufacturer ? search.manufacturer : ". . .loading"}</p>
            <p>Cost: {search.cost_in_credits ? search.cost_in_credits + " credits" : ". . .loading"}</p>
            <p>Length: {search.length ? search.length + " Kg" : ". . .loading"} </p>
            <p>Hyperdrive rating: {search.hyperdrive_rating ? search.hyperdrive_rating : ". . .loading"}</p>
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
