import React from "react";

function Details({ routeProps, character }) {
  console.log(routeProps, character);
  const { id, image, name, homeworld } = character;
  return (
    <>
      Details
    </>
  );
}

export default Details;