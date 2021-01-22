
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import PatternList from './PatternList';
import PatternView from './PatternView';


function App() {

  const [patterns, setPatterns] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_BASE_URL}`)
    fetch('http://localhost:3000/patterns')
    .then((r)=>r.json())
    .then(allData => {
      setPatterns(allData)
      // setProjects(allData.projects)
    })
  }, [])
  
  return (
    <div>
      <Header />
      <PatternList patterns={patterns}/>
    </div>
  )
}

export default App;
