import React from "react";
import "./Home.css";
function Home() {
  // home room
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item item1">
          <p>
            "The Star Wars franchise depicts the adventures of characters "A
            long time ago in a galaxy far, far away" in which humans and many
            species of aliens co-exist with robots, who may assist them in their
            daily routines; space travel between planets is common due to
            lightspeed hyperspace technology. The planets range from wealthy,
            planet-wide cities to deserts scarcely populated by primitive
            tribes. Virtually any Earth biome, along with many fictional ones,
            has its counterpart as a Star Wars planet which, in most cases, teem
            with sentient and non-sentient alien life."
          </p>
        </div>
        <div className="grid-item item2">
          <p>
            "The franchise also makes use of other astronomical objects such as
            asteroid fields and nebulae. Spacecraft range from small
            starfighters, to huge capital ships such as the Star Destroyers, to
            space stations such as the moon-sized Death Stars. Telecommunication
            includes two-way audio and audiovisual screens, holographic
            projections, and HoloNet (internet counterpart).{" "}
            <i>(From Wikipedia, the free encyclopedia)</i>"
          </p>
        </div>
      </div>
      <p className="endP">
        Click the <strong>people</strong> <strong>Planet</strong> and{" "}
        <strong>Starship </strong>button above!!!
      </p>
    </div>
  );
}

export default Home;
