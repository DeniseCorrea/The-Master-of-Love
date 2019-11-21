import React, { useState, useEffect }  from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { getCharactersArr } from "../../util/getCharactersHelper";
import Preferences from "../Preferences/Preferences";
import Carrousel from "../Carrousel/Carrousel";
import Details from "../Details/Details";
import Match from "../Match/Match";
import Quiz from "../Quizz/Quiz";
import Page404 from "../Page404/Page404";

function App() {
  const [ charactersArr, setCharactersArr ] = useState([]);
  const [ currentIdx, setCurrentIdx ] = useState(0);
  const [ filteredCharactersArr, setFilteredCharactersArr ] = useState([]);
  const [ favoritesArr, setFavoritesArr ] = useState([]);
  const [ filters, setFilters ] = useState({ gender: "all", species: "all" });

  useEffect(() => {
    console.log("MOUNTED");
    getCharactersArr().then(arr => setCharactersArr(arr));
  }, []); 

  const favoritesToggleHandler = () => {
    const currentCharacter = filteredCharactersArr[currentIdx];
    setFavoritesArr(favoritesArr.includes(currentCharacter) ? 
      favoritesArr.filter(character => character.id !== currentCharacter.id)
      :
      [...favoritesArr, currentCharacter]);
    }
  
  const setFiltersHandler = (filters) => {
    setFilters(filters);
  }
  
  const setFilteredCharactersArrHandler = () => {
    // filter the initial array
    const filteredArr = charactersArr.filter(el => {
      if (filters.gender === "male") return el.gender === "male";
      if (filters.gender === "female") return el.gender === "female";
      else return el
    })
      .filter(el => {
        if (filters.species === "human") return el.species === "human";
        if (filters.species === "nothuman") return el.species !== "human";
        else return el 
      });
    // randomize order  
    for (let i = 0; i < filteredArr.length; i++) {
      const randomIdx = Math.floor(Math.random() * filteredArr.length) % filteredArr.length;
      [filteredArr[i], filteredArr[randomIdx]] = [filteredArr[randomIdx], filteredArr[i]];
    }
    // set filtered array
    setFilteredCharactersArr(filteredArr);
  }

  console.log(filteredCharactersArr);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/" render={() => {
            return <Preferences onSetFilters={setFiltersHandler} filters={filters} onSetFilteredCharactersArr={setFilteredCharactersArrHandler} />
          }} />

          <Route exact path="/carrousel" render={() => {
            return filteredCharactersArr.length > 0 ?
              <Carrousel character={filteredCharactersArr[currentIdx]} 
                setCurrentIdx={setCurrentIdx} 
                currentIdx={currentIdx} 
                onFavoritesToggle={favoritesToggleHandler} 
                isFavorite={favoritesArr.includes(filteredCharactersArr[currentIdx])} 
                filteredCharactersArr={filteredCharactersArr} />
              :
              <Redirect to="/"/> 
              }} />

          <Route exact path="/carrousel/:id/details" render={
            (routeProps) => {
              return charactersArr.length > 0 ?
                <Details routeProps={routeProps} character={filteredCharactersArr[currentIdx]} />
                :
                <Redirect to="/"/>
            }} 
          />

          <Route exact path="/carrousel/match" render={() => {
            return filteredCharactersArr.length > 0 ?
              <Match character={filteredCharactersArr[currentIdx]} />
              :
              <Redirect to="/"/> 
              }} /> 

          <Route exact path="/quiz" render={() => {
            return filteredCharactersArr.length > 0 ?
              <Quiz character={filteredCharactersArr[currentIdx]} />
              :
              <Redirect to="/"/> 
              }} />

          <Route component={Page404} /> 

        </Switch>
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
