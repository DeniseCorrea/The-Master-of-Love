import React from "react";
import { Link, withRouter } from "react-router-dom";

function Match({ history, character }) {

  const { name } = character;
  return (
    <>

<div className="container">
    <div className="header">
    <div className="third2"><h1>
    The Master
    </h1></div>

    <div className="third"><Link to="/preferences">
      <img src="./logo.png" alt="logo"/>></Link>
    </div>

    <div className="third2"> <h1>
    Of Love
    </h1></div>
  </div>

     <div className="content">
        <div className="textbox">
          <h2>It's a match!</h2><br></br>
          <h2>You And <b><i>{name}</i></b> Like Eachother, But...</h2><br></br>
          <h2>Patience You Must Have, My Young Padawan.</h2><br></br>
          <h2>First The Test You Must Pass!</h2><br></br>
        </div>
    </div>
    <div className="footer">
        <button className="button" onClick={() => history.push("/quiz")}>Test Me!</button>
      </div>
      </div>
    </>
  );
}

export default withRouter(Match);