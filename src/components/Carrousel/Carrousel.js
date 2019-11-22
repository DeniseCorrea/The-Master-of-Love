import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Carrousel.css";

function Carrousel({ history, character, setCurrentIdx, currentIdx, onFavoritesToggle, filteredCharactersArr, isFavorite }) {

  const onClickHeartHandler = () => {
    const image = document.getElementsByClassName("carrousel")[0];
    // image.classList.remove("puff-in-center");
    image.classList.add("slide-out-right");
    setTimeout(() => {
      const didMatch = Math.floor(Math.random() * 10) > 6;
      if (didMatch) {
        history.push("/carrousel/match");
      } else {
        image.classList.remove("slide-out-right");
        setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length);
      }
    }, 1000) 
  };

  const onClickXHandler = () => {
    const image = document.getElementsByClassName("carrousel")[0];
    // image.classList.remove("puff-in-center");
    image.classList.add("slide-out-left");
    setTimeout(() => {
      image.classList.remove("slide-out-left");
      setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length);
    }, 1000) 
  }

  const { id, image, name, homeworld, diedLocation, class: classOf } = character;

  return (

    <>
      <div className="container">
        <div className="header">
          <div className="third2"><h1>
          The Master
          </h1></div>

          <div className="third">
            <Link to="/preferences">
              <img src="logo.png" alt="logo"/>
            </Link>
          </div>

          <div className="third2"> 
            <h1>Of Love</h1>
          </div>
        </div>
        <div className="content swipe"> 
          <img className="carrousel puff-in-center" src={image} alt="" />
        </div>
        <div className="content swipe" key={id}>
          <div>
              {name && <p>Name: {name}</p>}
              <p>{homeworld || diedLocation || classOf || "Jedi Wannabe"}</p>
              <br></br>
              <Link to={`/carrousel/${id}/details`}>Show me more</Link>
            </div>
        </div>
        <div className="footer">
          <button className="buttonsmall" onClick={onClickXHandler}>X</button>
          <button className="buttonsmall true" onClick={onClickHeartHandler}>V</button>
        </div>
      </div>
    </>
  );
}

export default withRouter(Carrousel);