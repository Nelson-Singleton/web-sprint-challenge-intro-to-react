import React, { useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Character from '../src/components/Character'
import Charactercard from '../src/components/Charactercard'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsData, setData] = useState([])

useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`)  
  .then(response => {
    setData(response.data.results)
    console.log(response.data.results)
    debugger
  })
  .catch(err => {
    debugger
  })
  .finally(() => {
  
  })
  
  }, [])

  return (
    <div className="App">
      <Character starWarsData = {starWarsData}/>
      
    </div>
  );
}

export default App;


