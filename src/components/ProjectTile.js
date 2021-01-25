import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function ProjectTile() {

    return (
        <li className="card">
            <img src={"https://via.placeholder.com/400"} alt={"username"} />
            <h4>{"username"}</h4>
        </li>
    )
}

export default ProjectTile;