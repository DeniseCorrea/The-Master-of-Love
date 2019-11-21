import React, { useState, useEffect }  from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { getCharactersArr } from "../../util/getCharactersHelper";
import Preferences from "../Preferences/Preferences";
import Carrousel from "../Carrousel/Carrousel";
import Details from "../Details/Details";
import Quiz from "../Quizz/Quiz";

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
    const currentCharacter = charactersArr[currentIdx];
    setFavoritesArr(favoritesArr.includes(currentCharacter) ? 
      favoritesArr.filter(character => character.id !== currentCharacter.id)
      :
      [...favoritesArr, currentCharacter]);
    }
  
  const setFiltersHandler = (filters) => {
    setFilters(filters);
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Quiz />
        <Switch>

          <Route exact path="/" render={() => {
            return <Preferences onSetFilters={setFiltersHandler} filters={filters}/>
          }} />

          <Route exact path="/carrousel" render={() => {
            return charactersArr.length > 0 ?
              <Carrousel character={charactersArr[currentIdx]} 
                setCurrentIdx={setCurrentIdx} 
                currentIdx={currentIdx} 
                onFavoritesToggle={favoritesToggleHandler} 
                isFavorite={favoritesArr} />
              :
              <p>Loading...</p>  
              }} />

          <Route exact path="/details/:id" render={
            (routeProps) => {
              console.log(routeProps);
              return charactersArr.length > 0 ?
                <Details routeProps={routeProps} character={charactersArr[currentIdx]} />
                :
                <Redirect to="/"/>
            }} 
          />

        </Switch>
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
