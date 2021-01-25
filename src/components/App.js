
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import PatternList from './PatternList';
import PatternView from './PatternView';
import PatternForm from './PatternForm';
import Login from './Login';


function App() {

  const [patterns, setPatterns] = useState([])
  const [projects, setProjects] = useState([])
  const [query, setQuery] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(true)

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
  // GET USER
  // useEffect(() => {
  //   fetch('http://localhost:3000/login', {
  //     method: "POST",
  //   })
  //   .then((r)=>r.json())
  //   .then(setCurrentUser)
  //   .then(console.log(currentUser))
  // }, [])
  
  // FILTER SEARCH ITEM
  const displayedPatterns = patterns.filter((pattern)=>{
    return pattern.name.toLowerCase().includes(query.toLowerCase())
  })

  // UPDATE PROJECT LIST
  function updateProjects(projObj){
    setProjects([...projects, projObj])
  }

 
  
  return (
    <Router>
    <div>
      <Header 
        query={query} 
        setQuery={setQuery} 
        login={login}
        setLogin={setLogin}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        />
    <Switch>
      <Route exact path="/">
        <PatternList 
          patterns={displayedPatterns} 
          login={login}
          currentUser={currentUser}
          updateProjects={updateProjects}
          />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/patterns/new">
        <PatternForm />
      </Route>

      <Route exact path="/patterns/:id">
        <PatternView />
      </Route>



      
    </Switch>
    </div>
    </Router>
  )
}

export default App;
