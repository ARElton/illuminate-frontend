import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PatternTile() {

    return(
        <li className="card">
            <div className="details">
                {favorite ? (
                    <button 
                    onClick={() => setFavorite(false)} 
                    className="emoji-button favorite active">★</button>
                    ) : (
                    <button 
                    onClick={() => setFavorite(true)}
                    className="emoji-button favorite">☆</button>
                    )}
                <strong>{"Pattern name"}</strong>
            </div>
            <div className="image">
                <img src={image} alt={description} />
            </div>
            <div className="Category">
                <span>{"Category"}</span>
            </div>
        </li>
    )
    
}

export default PatternTile;