import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Carrousel.css";

function Carrousel({ history, character, setCurrentIdx, currentIdx, onFavoritesToggle, filteredCharactersArr, isFavorite }) {

  const onClickHeartHandler = () => {
    const image = document.getElementsByClassName("carrousel-image")[0];
    image.classList.remove("puff-in-center");
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
    const image = document.getElementsByClassName("carrousel-image")[0];
    image.classList.remove("puff-in-center");
    image.classList.add("slide-out-left");
    setTimeout(() => {
      image.classList.remove("slide-out-left");
      setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length);
    }, 1000) 
  }

  const { id, image, name, homeworld, diedLocation, class: classOf } = character;

  return (
    <div className="carrousel" key={id}>
      <div className="carrousel-image-container">
        <img className="carrousel-image puff-in-center" src={image} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{homeworld || diedLocation || classOf }</p>
      </div>
      <button onClick={onClickXHandler}>X</button>
      <button onClick={() => onFavoritesToggle()}>{isFavorite ? "Remove from favorites" : "Add to favorites"}</button>
      <button onClick={onClickHeartHandler}>heart</button>
      <Link to={`/carrousel/${id}/details`}>More...</Link>
    </div>
  );
}

export default withRouter(Carrousel);