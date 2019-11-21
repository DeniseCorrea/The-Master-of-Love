import React from "react";
import { Link, withRouter } from "react-router-dom";

function Details({ history, routeProps, character }) {

  const userClick = () => {
    if (history) {
      history.push("/carrousel");
    } 
  };   
  
  const { id, image, name, homeworld, species, height, mass, hairColor, eyeColor, cybernetics, sensorColor, platingColor, affiliations} = character;
  return (
    <>
      <div className="details" key={id}>           
        <img className="details-image" src={image} alt="" />
        <div>
          {name && <p>Name: {name}</p>}
          {homeworld && <p>Homeworld: {homeworld}</p>}
          {species && <p>Species: {species}</p>}
          {height && <p>Height: {height}m</p>}
          {mass && <p>Mass: {mass}kg</p>}
          {hairColor && <p>Hair Color: {hairColor}</p>}
          {eyeColor && <p>Eye Color: {eyeColor}</p>}
          {cybernetics && <p>Cybernetics: {cybernetics}</p>}
          {sensorColor && <p>Sensor Color: {sensorColor}</p>}
          {platingColor && <p>Plating Color: {platingColor}</p>}
          {affiliations && <p>Affiliations: {affiliations.join(", ")}</p>}
        </div>
          <button onClick={userClick}>Wrong force? Go back</button>
      </div>
    </>
  );
}

export default withRouter(Details);