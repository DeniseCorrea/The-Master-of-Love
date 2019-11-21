import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Carrousel.css";

function Carrousel({ history, character, setCurrentIdx, currentIdx, onFavoritesToggle, filteredCharactersArr, isFavorite }) {
  
  const onClickHandler = () => {
    const didMatch = Math.floor(Math.random() * 10) > 6;
    if (didMatch) {
      history.push("/carrousel/match");
    } else {
      setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length);
    }
  };

  const { id, image, name, homeworld } = character;
  return (
    <div className="carrousel" key={id}>
      <img className="carrousel-image" src={image} alt="" />
      <div>
        {name && <p>Name: {name}</p>}
        {homeworld && <p>Homeworld: {homeworld}</p>}
      </div>
      <button onClick={() => setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length)}>X</button>
      <button onClick={() => onFavoritesToggle()}>{isFavorite ? "Remove from favorites" : "Add to favorites"}</button>
      <button onClick={onClickHandler}>heart</button>
      <Link to={`/carrousel/${id}/details`}>More...</Link>
    </div>
  );
}

export default withRouter(Carrousel);