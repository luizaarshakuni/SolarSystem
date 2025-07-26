import React from "react";
import { useParams } from "react-router-dom";
import PlanetsData from "../../Components/PlanetsData/PlanetsData";
import "./planetDetails.css";

export default function PlanetDetails() {
  const { name } = useParams();
  const planet = PlanetsData[name];

  if (!planet) return <p>Planet not found.</p>;

  return (
    <div className="PlanetDetails">
      <h1>- The {planet.title} -</h1>
      <div className="content">
        <img src={`/images/${name}.png`} alt={planet.title} />
        <h2>The {planet.title}'s Identity</h2>
        <p>{planet.identify}</p>
        <h2>Structure and Composition</h2>
        <p>{planet.structure}</p>
        <h2>Surface and Atmosphere</h2>
        <p>{planet.surface}</p>
        <h2>{planet.title} Activity</h2>
        <p>{planet.activity}</p>
        <h2>Importance to Earth</h2>
        <p>{planet.importance}</p>
        <h2>Life Cycle</h2>
        <p>{planet.lifecycle}</p>
      </div>
    </div>
  );
}
