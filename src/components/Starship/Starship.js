import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Starship.css";
function Starship() {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // the search key helps update the render data every search key for the client
  // const urlStarship = `https://swapi.dev/api/starships/?search=${search}`;

  // this one says update and sort by name every single key
  useEffect(() => {
    const response = axios
      .get("https://swapi.dev/api/starships", {
        params: {
          sort: "name",
          search: search
        }
      })
      .then((resp) => {
        console.log(response);
        setStarships(resp.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  // after search clear the update data and return to the orginal
  const handleClear = () => {
    setSearch(" ");
  };

  // loading effect while fetched the data to render
  if (isLoading) {
    return <p>Loading StarWar...</p>;
  }

  return (
    <div className="container">
      <div className="search btn">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Starwar ships"
          id="search"
          type="text"
        />
        <button className="button" onClick={handleClear}>
          refresh
        </button>
      </div>
      <div className="mapContainer">
        {starships?.map((star, i) => {
          console.log(star);
          return (
            <div className="divWrapper">
              <h3 key={i}>Name:{star.name}</h3>
              <ul>
                <li>model: {star.model}</li>
                <li>manufacture: {star.manufacturer}</li>
                <li>cost_credit: {star.cost_in_credits}</li>
                <li>length: {star.length}</li>
                <li>max-atmo' speed: {star.max_atmosphering_speed}</li>
                <li>crew: {star.crew}</li>
                <li>passengers: {star.passengers}</li>
                <li>cargo: {star.cargo_capacity}</li>
                <li>class: {star.starship_class}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Starship;
