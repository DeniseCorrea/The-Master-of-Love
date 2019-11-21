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
      <div className="content">
        <div className="textbox">
        <h1>To Your Match Find, Your Preferences Submit You Must:
        </h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <input onChange={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="male" checked={filters.gender === "male" && "checked"} id="choice_1"/>
            <label htmlFor="choice_1">Male</label>
            <input onChange={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="female" checked={filters.gender === "female" && "checked"} id="choice_2"/>
            <label htmlFor="choice_2">Female</label>
            <input onChange={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="all" checked={filters.gender === "all" && "checked"} id="choice_3"/>
            <label htmlFor="choice_3">Whatever</label>
          </div>
          <div>
            <input onChange={(e) => onSetFilters({...filters, species: e.target.value})} type="radio" name="species" value="human" checked={filters.species === "human" && "checked"} id="choice_4"/>
            <label htmlFor="choice_4">human</label>
            <input onChange={(e) => onSetFilters({...filters, species: e.target.value})} type="radio" name="species" value="nothuman" checked={filters.species === "nothuman" && "checked"} id="choice_5"/>
            <label htmlFor="choice_5">Not Human</label>
            <input onChange={(e) => onSetFilters({...filters, species: e.target.value})} type="radio" name="species" value="all" checked={filters.species === "all" && "checked"} id="choice_6"/>
            <label htmlFor="choice_6">Whatever</label>
          </div>
          <div className="footer">
            <button className="button" type="submit">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default withRouter(Preferences);