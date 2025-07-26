import React from "react";
import { Link } from "react-router-dom";
import PlanetData from "../PlanetsData/PlanetsData";

export default function PlanetAbout({ name }) {
  const planet = PlanetData[name];

  return (
    <div className="PlanetAbout">
      <h1>- {planet.title} -</h1>
      <p>{planet.description}</p>
      <Link to={`/${name}/details`}>See more...</Link>
    </div>
  );
}
