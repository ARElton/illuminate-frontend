
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import PatternList from './PatternList';
import PatternView from './PatternView';
import PatternForm from './PatternForm';
import Login from './Login';
import Profile from './Profile';


function App() {
  // Intitial States
  const [patterns, setPatterns] = useState([])
  const [projects, setProjects] = useState([])
  // User States
  const [userProjects, setUserProjects] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(false)
  // Filter States
  const [query, setQuery] = useState("")
  const [currentPattern, setCurrentPattern] = useState(null)
  const [currentSort, setCurrentSort] = useState("")

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
  
  // FILTER SEARCH ITEM & SORT
  const displayedPatterns = patterns
    .filter((pattern)=>{
      return pattern.name.toLowerCase().includes(query.toLowerCase())
    })
    .filter((pattern) => {
      if (currentSort === "") {
        return pattern
      } else {
        return pattern.category === currentSort
      }
      })
  // UPDATE PROJECT LIST
  function updateProjects(projObj){
    setUserProjects([...projects, projObj])
  }
  // DELETE PROJECT
  function handleRemoveProject(id) {
    const newProjects = projects.filter((project) => project.id !== id)
    setUserProjects(newProjects)
  }
  // On User Login, set user projects
  function getUserProjects(id){
    const filteredProjects = projects.filter((project)=> {
      return project.user_id === id
    })
    setUserProjects(filteredProjects)
  }
  // On new pattern upload, add to the pattern list
  function updatePatterns(patternObj){
    setPatterns([...patterns, patternObj])
  }

  return (
    <div>
      <Header 
        query={query} 
        setQuery={setQuery} 
        login={login}
        setLogin={setLogin}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCurrentSort={setCurrentSort}
        />
    <Switch>
      <Route exact path="/">
        <PatternList 
          patterns={displayedPatterns} 
          allPatterns={patterns}
          setCurrentPattern={setCurrentPattern}
          />
      </Route>
      <Route exact path="/login">
        <Login 
        setCurrentUser={setCurrentUser} 
        setLogin={setLogin} 
        getUserProjects={getUserProjects}
        />
      </Route>
      <Route exact path="/profile">
        <Profile 
        currentUser={currentUser} 
        userProjects={userProjects} 
        onRemoveProject={handleRemoveProject}
        onEditProject={updateProjects}
        />
      </Route>
      <Route exact path="/patterns/new">
        <PatternForm updatePatterns={updatePatterns}/>
      </Route>

      <Route path="/patterns/:id">
        <PatternView 
        pattern={currentPattern}
        projects={projects}
        currentUser={currentUser}
        updateProjects={updateProjects}
        allPatterns={patterns}
        />
      </Route>


    </Switch>
    </div>
  )
}

export default App;
