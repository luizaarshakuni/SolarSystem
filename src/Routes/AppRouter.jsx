import React from "react";
import PlanetDetails from "../Pages/PlanetDetails/PlanetDetails";
import AboutPart from "../Pages/AboutPart/AboutPart";
import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <div className="AppRouter">
      <Routes>
        <Route path="/" element={<AboutPart />} />
        <Route path="/:name" element={<AboutPart />} />
        <Route path="/:name/details" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}
