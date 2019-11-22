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
    <><div className="container">
    <div className="header">
    <div className="third2"><h1>
    The Master
    </h1></div>

    <div className="third"><Link to="/preferences">
      <img src="logo.png" alt="logo"></img></Link>
    </div>

    <div className="third2"> <h1>
    Of Love
    </h1></div>
  </div>
        <div className="content">
      <div className="row" key={id}>   
        <div className="half">
          <img src={image} alt="" />
        </div> 
        <div className="half">
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
      </div>
        <div className="footer">
          <button className="button" onClick={userClick}>Back</button>
          <Link to={"/carrousel"}></Link>
      </div>
      </div>
      </div>
    </>
  );
}

export default withRouter(Details);