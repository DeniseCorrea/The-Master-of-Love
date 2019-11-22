import React from "react";
import { withRouter } from "react-router-dom";

function Match({ history, character }) {

  const { name } = character;
  return (
    <>
     <div className="content">
        <div className="textbox">
          <h2>Patience You Must Have My Young Padawan...</h2><br></br>
          <h2>You And <b><i>{name}</i></b> Like Eachother, But...</h2><br></br>
          <h2>First The Test You Must Pass!</h2><br></br>
        </div>
    </div>
    <div class="footer">
        <button className="button" onClick={() => history.push("/quiz")}>Test Me!</button>
      </div>
    </>
  );
}

export default withRouter(Match);