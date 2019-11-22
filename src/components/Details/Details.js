import React from "react";
import { Link, withRouter } from "react-router-dom";

function Details({ history, routeProps, character }) {

  const userClick = () => {
    if (history) {
      history.push("/carrousel");
    }
  };

  const { id, image, name, homeworld, species, height, mass, hairColor, eyeColor, cybernetics, sensorColor, platingColor, affiliations } = character;
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="third2">
            <h1>
              The Master
            </h1>
          </div>

          <div className="third">
            <Link to="/preferences">
              <img src="logo.png" alt="logo" />
            </Link>
          </div>

          <div className="third2">
            <h1>
              Of Love
            </h1>
          </div>
        </div>


        <div className="content">
          <div className="rowHalf" key={id}>

            <div className="halfImage">
              <img src={image} alt="" />
            </div>

            <div className="half">
              {name && <div className="halfFlex"><div className="tagColor">Name:</div><div>{name}</div></div>}
              {homeworld && <div className="halfFlex"><div className="tagColor"> Homeworld: </div><div>{homeworld}</div></div>}
              {species && <div className="halfFlex"><div className="tagColor">Species: </div><div>{species}</div></div>}
              {height && <div className="halfFlex"><div className="tagColor">Height:</div><div> {height}m</div></div>}
              {mass && <div className="halfFlex"><div className="tagColor">Mass: </div><div>{mass}kg</div></div>}
              {hairColor && <div className="halfFlex"><div className="tagColor"> Hair Color:</div><div> {hairColor}</div></div>}
              {eyeColor && <div className="halfFlex"><div className="tagColor"> Eye Color:</div><div>{eyeColor}</div></div>}
              {cybernetics && <div className="halfFlex"><div className="tagColor">Cybernetics: </div><div>{cybernetics}</div></div>}
              {sensorColor && <div className="halfFlex"><div className="tagColor">Sensor Color:</div><div>{sensorColor}</div></div>}
              {platingColor && <div className="halfFlex"><div className="tagColor"> Plating Color:</div><div> {platingColor}</div></div>}
              {affiliations && <div className="halfFlex"><div className="tagColor"> Affiliations:</div><div> {affiliations.join(", ")}</div></div>}
            </div>


          </div>
          <div className="footer">
            <button className="buttonBig" onClick={userClick}>Wrong force? Go back</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default withRouter(Details);