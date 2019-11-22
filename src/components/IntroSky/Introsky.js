import React from "react";
import { withRouter, Link } from "react-router-dom";

function Introsky() {
  return (
    <>
      <div className="container">
          <div className="sky">
              <h1 className="intro-title"> The Master of Love </h1>
              <h2 className="intro-subtitle"> May the match be with you</h2>
            <Link to="/preferences">
              <div className="introbox">
                  <img className="pulsate-fwd" src='./logo.png' alt=''/>
              </div>
            </Link>
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Introsky);