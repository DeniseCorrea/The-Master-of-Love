import React from "react";
import { withRouter } from "react-router-dom";

function Preferences({ history, onSetFilters, filters, onSetFilteredCharactersArr }) {
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSetFilteredCharactersArr();
    history.push("/carrousel");
  };

  return (
    <>
      <h3>To a match find preferences you must provide</h3>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input onChange={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="male" checked={filters.gender === "male" && "checked"}/> Male
          <input onChange={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="female" checked={filters.gender === "female" && "checked"}/> Female
          <input onChange={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="all" checked={filters.gender === "all" && "checked"}/> Whatever
        </div>
        <div>
          <input onChange={(e) => onSetFilters({...filters, species: e.target.value})} type="radio" name="species" value="human" checked={filters.species === "human" && "checked"}/> Human
          <input onChange={(e) => onSetFilters({...filters, species: e.target.value})} type="radio" name="species" value="nothuman" checked={filters.species === "nothuman" && "checked"}/> Not human
          <input onChange={(e) => onSetFilters({...filters, species: e.target.value})} type="radio" name="species" value="all" checked={filters.species === "all" && "checked"}/> Whatever
        </div>
        <button type="submit">Continue</button>
      </form>
    </>
  );
}

export default withRouter(Preferences);