import React from "react";
import { Link, withRouter } from "react-router-dom";
import yoda from './logo.png';

function Match({ history, character }) {

  const { name } = character;
  return (
    <>

      <div className="container">
        <div className="header">
          <div className="third2"><h1>
            The Master
    </h1></div>
    
    <div className="third">
      <Link to="/preferences">
        <img src={yoda} alt=""/>
      </Link>
    </div>
          

          <div className="third2"> <h1>
            Of Love
    </h1></div>

        </div>

        <div className="content">
          <div className="textbox">
            <div className="give-padding">
              <h2>It's a match!</h2>
            </div>

            <div className="give-padding">
              <h2>You And <b><i>{name}</i></b> Like Eachother, But...</h2>
            </div>

            <div className="give-padding">
              <h2>Patience You Must Have, My Young Padawan.</h2>
            </div>

            <div className="give-padding">
              <h2>First The Test You Must Pass!</h2>
            </div>
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