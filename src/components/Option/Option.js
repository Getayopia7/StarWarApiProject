import React from "react";
import "./Option.css";
import { Link } from "react-router-dom";
function Option() {
  // it display Home People Planets and Startships
  return (
    <>
      <div className="option">
        <div className="optWrapper ">
          <Link to="/">Home</Link>
          <Link to="/People">People</Link>
          <Link to="/planet">Planets</Link>
          <Link to="/starships">Starships</Link>
        </div>
      </div>
    </>
  );
}

export default Option;
