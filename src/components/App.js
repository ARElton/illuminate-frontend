
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
  const [query, setQuery] = useState("")

  ///-----------Initial Fetches-------------///

  // GET PATTERNS
  useEffect(() => {
    fetch('http://localhost:3000/patterns')
    .then((r)=>r.json())
    .then(allData => {
      setPatterns(allData)
    })
  }, [])

  // GET PROJECTS
  useEffect(() => {
    fetch('http://localhost:3000/projects')
    .then((r)=>r.json())
    .then(allData => {
      setProjects(allData)
    })
  }, [])
   
  ///---------------------------------------///
  
  // FILTER SEARCH ITEM
  const displayedPatterns = patterns.filter((pattern)=>{
    return pattern.name.toLowerCase().includes(query.toLowerCase())
  })
  
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <PatternList patterns={displayedPatterns} />
    </div>
  )
}

export default App;
