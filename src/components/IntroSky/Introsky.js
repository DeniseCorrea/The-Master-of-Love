import React from "react";
import { withRouter, Link } from "react-router-dom";

function Introsky() {
  return (
    <>
    <div className="container">
        <div className="sky">
            <Link to="/preferences">
            <div className="introbox">
            
               
                <div class="heart"></div>
              
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