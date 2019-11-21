import React from "react";
import { withRouter } from "react-router-dom";

function Match({ history, character }) {

  const { name } = character;
  return (
    <>
      <h3>Patience you must have my young padawan</h3>
      <p>You and {name} like eachother, but...</p>
      <p>First the test you must pass</p>
      <button onClick={() => history.push("/quiz")}>Test me please</button>
    </>
  );
}

export default withRouter(Match);