import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PatternTile({pattern}) {

    const [favorite, setFavorite] = useState(false)
    const {id, image, name, category, description} = pattern

    return(
        <div className="pattern-card">
        <li className="pattern-card-li">
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
                <strong>{name}</strong>
            </div>
            <div className="image">
                <img src={image} alt={description} />
            </div>
            <div className="Category">
                <span>{category}</span>
            </div>
        </li>
        </div>
    )
    
}

export default PatternTile;