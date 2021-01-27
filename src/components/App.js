
import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
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
  const [currentUser, setCurrentUser] = useState(null)
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
    setProjects([...projects, projObj])
  }
  function handleEditProject(editedProject){
    const updatedProjectsList = projects.map((project)=>{
      if (project.id === editedProject.id) {
        return editedProject
      } else {
        return project
      }
    })
    setProjects(updatedProjectsList)
  }
  function handleRemoveProject(id) {
    const newProjects = projects.filter((project) => project.id !== id)
    setProjects(newProjects)
  }
  // UPDATE PATTERN LIST   ///    On new pattern upload, add to the pattern list
  function updatePatterns(patternObj){
    setPatterns([...patterns, patternObj])
  }

  return (
    <div className="big-container">
      <Header 
        query={query} 
        setQuery={setQuery} 
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
        />
      </Route>
      <Route exact path="/profile">
        <Profile 
          currentUser={currentUser} 
          projects={projects} 
          onRemoveProject={handleRemoveProject}
          onEditProject={handleEditProject}
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
          onRemoveProject={handleRemoveProject}
          onEditProject={handleEditProject}
        />
      </Route>
    </Switch>
    </div>
  )
}

export default App;
