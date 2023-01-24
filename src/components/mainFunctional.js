import React from "react";
import People from "./People/People";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Planet from "./Planet/Planet";
import Starship from "./Starship/Starship";
function MainFunctional() {
  ///routing room
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/planet" element={<Planet />} />
        <Route path="/starships" element={<Starship />} />
      </Routes>
    </div>
  );
}

export default MainFunctional;
