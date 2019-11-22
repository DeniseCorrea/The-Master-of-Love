import React from "react";
import { withRouter, Link } from "react-router-dom";

function Introsky() {
  return (
    <>
      <div className="container">
          <div className="sky">
              <div><h1 className="intro-title"> The Master Of Love </h1>
              </div>
            <Link to="/preferences">
              <div className="introbox">
                  <img className="pulsate-fwd" src='./logo.png' alt=''/>
              </div>
            </Link>
            <div>
              <h1 className="intro-title"> May The Match Be With You</h1>
              </div>
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Introsky);