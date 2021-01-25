
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import PatternList from './PatternList';
import Categories from './Categories';
import PatternForm from './PatternForm';
import Login from './Login';


function App() {

  const [patterns, setPatterns] = useState([])
  const [projects, setProjects] = useState([])
  const [query, setQuery] = useState("")
  const [currentUser, setCurrentUser] = useState("Roy")

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
      <Header 
        query={query} 
        setQuery={setQuery} 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        />
      <PatternList 
        patterns={displayedPatterns} 
        />
    </div>
  )
}

export default App;
