import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PatternTile({pattern, currentUser, handleAddProject}) {

    const [favorite, setFavorite] = useState(false)
    const {id, image, name, category, description} = pattern

    useEffect(()=>{
        fetch(`http://localhost:3000/patterns/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({favorite: favorite})
        })
    }, [])

    function onPatternFavorite(){
        //when favorite is clicked, toggle state
        setFavorite(!favorite)
        //create new project with pattern/user ids
        //update project list state
        //if favorite is true, allow to render, if false, hide
        handleAddProject(id)
    }


    return(
        <li className="pattern-card">
            <div className="favorite">
                {favorite ? (
                    <button 
                    onClick={() => setFavorite(false)} 
                    className="fav-active">★</button>
                    ) : (
                    <button 
                    onClick={() => setFavorite(true)}
                    className="fav-inactive">☆</button>
                    )}
            </div>


            <strong>{name}</strong>
            <img src={image} alt={description} />
            <div className="Category">
                <span>{category}</span>
            </div>
        </li>
    )
    
}

export default PatternTile;