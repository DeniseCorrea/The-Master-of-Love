import React, { useState, useEffect } from "react";

function Preferences({ onSetFilters, filters }) {
  // const [ genderChecked, setGender ] = useState("all");
  // const [ speciesChecked, setSpecies ] = useState("all");


  // useEffect(() => {

  // })
  // onClick={(e) => e.target.checked = "checked"}
  console.log(filters)
  return (
    <>
      <h3>To a match find preferences you must provide</h3>
      <div>
        <input onClick={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="male" checked={filters.gender === "male" && "checked"}/> Male
        <input onClick={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="female" checked={filters.gender === "female" && "checked"}/> Female
        <input onClick={(e) => onSetFilters({...filters, gender: e.target.value})} type="radio" name="gender" value="all" checked={filters.gender === "all" && "checked"}/> Whatever
      </div>
      <div>
        <input type="radio" name="species" value="human"/> Human
        <input type="radio" name="species" value="nothuman"/> Not human
        <input type="radio" name="species" value="all" checked/> Whatever
      </div>
    </>
  );
}

export default Preferences;