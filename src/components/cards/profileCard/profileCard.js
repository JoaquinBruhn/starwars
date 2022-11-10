import React from "react";
import FilmsProfCard from "./filmsProfCard/filmsProfCard";
import PeopleProfCard from "./peopleProfCard/peopleProfCard";
import PlanetsProfCard from "./planetsProfCard/planetsProfCard";
import "./profileCard.css";
import SpeciesProfCard from "./speciesProfCard/speciesProfCard";
import StarshipProfCard from "./starshipProfCard/starshipProfCard";
import VehiclesProfCard from "./vehiclesProfCard/vehiclesProfCard";

const ProfileCard = ({ item, type }) => {
  switch (type) {
    case "people":
      return <PeopleProfCard item={item} />;

    case "planets":
      return <PlanetsProfCard item={item} />;

    case "films":
      return <FilmsProfCard item={item} />;

    case "species":
      return <SpeciesProfCard item={item} />;

    case "vehicles":
      return <VehiclesProfCard item={item} />;

    case "starships":
      return <StarshipProfCard item={item} />;

    default:
      return <h1>There has been an error</h1>;
  }
};

export default ProfileCard;
