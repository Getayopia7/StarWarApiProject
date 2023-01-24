import axios from "axios";
import React, { useEffect, useState } from "react";

function Planet() {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const urlPlanets = `https://swapi.dev/api/planets/?search=${search}`;

  useEffect(() => {
    const response = axios.get(urlPlanets).then((resp) => {
      console.log(response);
      setPlanets(resp.data.results);
      setIsLoading(false);
    });
    //// searching key restriction unless key >2 no any result get for the search!
    // if(search.length >2 ){
    //   response();
    // }
  }, [search]);

  //search event handler --- change while write
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  // to refresh the content once it searched
  const handleClear = () => {
    setSearch("");
  };

  if (isLoading) {
    return <p>Loading StarWar...</p>;
  }
  return (
    <div className="container">
      <div className="search btn">
        <input
          onChange={searchHandler}
          id="search"
          defaultValue={search}
          type="text"
        />
        <button className="button" onClick={handleClear}>
          refresh
        </button>
      </div>
      <div className="mapContainer">
        {planets?.map((plnet, i) => {
          return (
            <div className="divWrapper">
              <h3 key={i}>Name:{plnet.name}</h3>
              <ul>
                <li>roataion_period: {plnet.rotation_period}</li>
                <li>orbital_period: {plnet.orbital_period}</li>
                <li>diameter: {plnet.diameter}</li>
                <li>climate: {plnet.climate}</li>
                <li>gravity: {plnet.gravity}</li>
                <li>terrain: {plnet.terrain}</li>
                <li>Serface-water: {plnet.serface_water}</li>
                <li>population: {plnet.population}</li>
              </ul>
              {/* <div className='btbtn'>
             <button className='bootmBtn'>refresh</button>
             </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Planet;
