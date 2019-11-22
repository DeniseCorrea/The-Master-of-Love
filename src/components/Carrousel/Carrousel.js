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
    <>
    <div className="content swipe"> 
          <img className="carrousel" src={image} alt="" />
        </div>
    <div className="content swipe" key={id}>
        {/* <div className="textbox"> */}
        
        <div>
            {name && <p>Name: {name}</p>}
            {homeworld && <p>Homeworld: {homeworld}</p>}<br></br>
            <Link to={`/carrousel/${id}/details`}>Click Here For More Details.</Link>
          </div>
          </div>
        {/* </div> */}
        <div class="footer">
            <button className="buttonsmall" onClick={() => setCurrentIdx((currentIdx + 1) % filteredCharactersArr.length)}>X</button>
            {/* <button className="button" onClick={() => onFavoritesToggle()}>{isFavorite ? "Remove From favorites" : "Add To Favorites"}</button>
             */}<button className="buttonsmall true" onClick={onClickHandler}>V</button>
          </div>
      </>
  );
}

export default withRouter(Carrousel);