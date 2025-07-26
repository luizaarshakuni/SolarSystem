import React from "react";
import { useParams } from "react-router-dom";
import PlanetsAbout from "../../Components/PlanetsAbout/PlanetsAbout";
import Planets from "../../Components/Planets/Planets";
import "./aboutPart.css";

export default function AboutPart() {
  const { name } = useParams();

  return (
    <div className="AboutPart">
      <div className="solarSystem">
        {!name ? (
          <>
            <h2>
              Click on the planets to explore each one and discover fascinating
              facts about our Solar System!
            </h2>
            <p>
              This cosmic family is centered around the Sun, radiant star whose
              gravity holds everything in place. Orbiting around it are eight
              unique planets, each with its own story, atmosphere, and
              characteristics. From the scorched surface of Mercury to the icy
              winds of Neptune, every planet offers a glimpse into the
              incredible diversity of our celestial neighborhood. Earth, our
              home, is just one piece of this vast system. As we journey through
              space, we’ll uncover the secrets, beauty, and mysteries of the
              Solar System.
            </p>
          </>
        ) : (
          <PlanetsAbout name={name} />
        )}
      </div>
      <div className="PlanetsSection">
        <Planets />
      </div>
    </div>
  );
}
