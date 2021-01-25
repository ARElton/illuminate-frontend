import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PatternTile({pattern}) {

    const [favorite, setFavorite] = useState(false)
    const {id, image, name, category, description} = pattern

    

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