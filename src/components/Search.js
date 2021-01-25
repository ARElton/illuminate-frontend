import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function Search({query, setQuery}) {

    return(
        <form className="searchbar">
            <input
                type="text"
                id="search"
                name="name"
                placeholder="SEARCH FOR SOMETHING SPECIFIC"
                value={query}
                onChange={(event)=>setQuery(event.target.value)}

            />
        </form>
    )

}

export default Search; 