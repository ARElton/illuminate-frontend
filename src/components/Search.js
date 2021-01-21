import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function Search() {

    return(
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="search..."
            />
            <button type="submit">🔍</button>
        </form>
    )

}

export default Search; 