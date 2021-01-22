import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PatternTile from './PatternTile';

function PatternList ({patterns}) {

    const patternComponents = patterns.map((pattern) => 
    <PatternTile 
        key={pattern.id}
        pattern={pattern}
    />
    )

    return(
        <ul className="pattern-cards">{patternComponents}</ul>
    )

}

export default PatternList; 