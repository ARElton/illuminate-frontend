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
                <h1>{name}</h1>
                <Link to={image} target="_blank">
                  <img src={image} alt={description} />
                </Link>
                <p className="pat-p">{category}</p>

                <Link to={`/patterns/${id}`}>
                  <button onClick={handleClick} className="pattern-button">Details</button>
                </Link>
              </div>
        </li>
    )
}

export default PatternTile;