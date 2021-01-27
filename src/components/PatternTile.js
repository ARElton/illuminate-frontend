import React from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';

function PatternTile({pattern, setCurrentPattern}) {
    const {id, image, name, category, description} = pattern

    function handleClick(){
      setCurrentPattern(pattern)
    }

    return(
        <li className="pattern-card">
              <div className="pattern-tile-detail">
                <strong>{name}</strong>
                <Link to={image} target="_blank">
                  <img src={image} alt={description} />
                </Link>
                
                <div className="Category">
                    <span>{category}</span>
                </div>
                <Link to={`/patterns/${id}`}>
                  <button onClick={handleClick} className="pattern-button">Details</button>
                </Link>
              </div>
        </li>
    )
}

export default PatternTile;