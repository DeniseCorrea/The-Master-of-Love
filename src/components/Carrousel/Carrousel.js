import React from "react";
import { Link } from "react-router-dom";
import "./Carrousel.css";

function Carrousel({ character, setCurrentIdx, currentIdx, onFavoritesToggle, filteredCharactersArr }) {
  
  const { id, image, name, homeworld } = character;
  return (
    <div className="carrousel" key={id}>
      <img className="carrousel-image" src={image} alt="" />
      <div>
        <p>{name}</p>
        <p>{homeworld}</p>
      </div>
      <button onClick={() => setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length)}>X</button>
      <button onClick={() => onFavoritesToggle()}>star</button>
      <button>heart</button>
      <Link to={`/details/${id}`}>More...</Link>
    </div>
  );
}

export default Carrousel;