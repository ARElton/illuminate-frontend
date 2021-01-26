import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PatternTile from './PatternTile';

function PatternList ({patterns, login, currentUser, updateProjects, setCurrentPattern, allPatterns}) {

    const patternComponents = patterns.map((pattern) => 
    <PatternTile 
        key={pattern.id}
        pattern={pattern}
        allPatterns={allPatterns}
        login={login}
        currentUser={currentUser}
        updateProjects={updateProjects}
        setCurrentPattern={setCurrentPattern}
    />
    )

    return(
        <div className="pattern-list">
            <h1>Patterns</h1>
            <ul className="pattern-cards">{patternComponents}</ul>
        </div>
    )

}

export default PatternList; 