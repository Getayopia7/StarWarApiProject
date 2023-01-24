// import "./People.css";
import { useEffect, useState } from "react";
import axios from "axios";

function People() {
  const [peoples, setPeoples] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const urlPpl = `https://swapi.dev/api/people/?search=${search}`;

  useEffect(() => {
    const response = axios.get(urlPpl).then((resp) => {
      console.log(response);
      setPeoples(resp.data.results);
      setIsLoading(false);
    });
  }, [search]);

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
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          id="search"
          placeholder="Search Starwar people"
          type="text"
        />
        <button className="button" onClick={handleClear}>
          refresh
        </button>
      </div>
      <div className="mapContainer">
        {peoples?.map((people, index) => {
          return (
            <div className="divWrapper">
              <h3 key={index}>Name:{people.name}</h3>
              <ul>
                <li>height:{people.height}</li>
                <li>mass:{people.mass}</li>
                <li>hair_color:{people.hair_color}</li>
                <li>skin_color:{people.skin_color}</li>
                <li>eye_color:{people.eye_color}</li>
                <li>birth_year{people.birth_year}</li>
                <li>gender:{people.gender}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default People;
