import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'

function Categories() {
    

return (
    <nav className="category-nav">
        <button>Art Deco</button>
        <button>Art Nouveau</button>
        <button>Geometric</button>
        <button>Tiffany</button>
    </nav>
)
}

export default Categories; 