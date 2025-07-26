import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlanetsData from "../PlanetsData/PlanetsData";
import "./planets.css";

export default function Planets() {
  const URAN_ANGLE = 272;

  const planetKeys = [
    "moon",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uran",
    "neptune",
    "pluton",
  ];

  const n = planetKeys.length;
  const anglePerPlanet = 360 / n;
  const uranIndex = planetKeys.indexOf("uran");
  const initialRotation = (uranIndex * anglePerPlanet - URAN_ANGLE) * -1;

  const { planetName } = useParams();
  const navigate = useNavigate();

  const [rotation, setRotation] = useState(initialRotation);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleClick = (clickedKey) => {
    const clickedIndex = planetKeys.indexOf(clickedKey);
    if (clickedIndex === -1) return;

    const rotationDiff =
      (uranIndex - clickedIndex) * anglePerPlanet + initialRotation;
    setRotation(rotationDiff);
    setSelectedPlanet(clickedKey);
    navigate(`/${clickedKey}`);
  };

  const sunny = () => {
    setSelectedPlanet(null);
    navigate(`/sun`);
  };

  const sunImage = selectedPlanet
    ? PlanetsData[selectedPlanet].image
    : PlanetsData.sun.image;

  return (
    <div className="PlanetsWrapper">
      <div
        className="OrbitCircle"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        <div className="Sun center" onClick={sunny}>
          <img
            src={sunImage}
            alt="sun-or-planet"
            className={selectedPlanet ? "planetFilter" : "sunFilter"}
          />
        </div>

        <div className="allPlanets">
          {planetKeys.map((key, i) => (
            <div
              key={key}
              className={`Planet ${key}`}
              onClick={() => handleClick(key)}
              style={{
                transform: `rotate(${
                  anglePerPlanet * i
                }deg) translate(300px) rotate(-${anglePerPlanet * i}deg)`,
              }}
            >
              <img src={PlanetsData[key].image} alt={key} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
