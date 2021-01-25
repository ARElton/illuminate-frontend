import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PatternTile({pattern, currentUser, login, updateProjects}) {

    const [favorite, setFavorite] = useState(false)
    const [project, setProject] = useState({})

    const {id, image, name, category, description} = pattern

    // ON FAVORITE CLICK
  function handleFavorite(){
    // TOGGLE FAVORITE STATE
    setFavorite(!favorite)
    
    (Object.keys(project).length === 0) ? handleAddProject() : reFavorite()
    }

     // CREATE NEW PROJECT
  function handleAddProject(){
    const newProjObj = {
      user_id: currentUser.id,
      pattern_id: id,
      image: null,
      favorite: true
    }
    fetch(`http://localhost:3000/projects/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: newProjObj
    })
    .then(r=>r.json())
    .then(newProj => {
      updateProjects(newProj)
      setProject(newProj)
    })
  }

  // HIDE UNFAVORITED PROJECT
  function handleUnfavorite(){
      fetch(`http://localhost:3000/projects/${project.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({favorite: false})
      })
      .then(r=>r.json())
      .then(patchedProj => {
        updateProjects(patchedProj)
        setProject(patchedProj)
      })
  }
  // IF PROJECT ALREADY EXISTS AND YOU CLICK FAVORITE
  function reFavorite(){
    fetch(`http://localhost:3000/projects/${project.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({favorite: true})
    })
    .then(r=>r.json())
    .then(patchedProj => {
      updateProjects(patchedProj)
      setProject(patchedProj)
    })
}

    return(
        <li className="pattern-card">
            {login ? (
            <div className="favorite">
                {favorite ? (
                    <button 
                    onClick={handleFavorite} 
                    className="fav-active">★</button>
                    ) : (
                    <button 
                    onClick={handleUnfavorite}
                    className="fav-inactive">☆</button>
                    )}
            </div> ) : null}



            <strong>{name}</strong>
            <img src={image} alt={description} />
            <div className="Category">
                <span>{category}</span>
            </div>
        </li>
    )
    
}

export default PatternTile;