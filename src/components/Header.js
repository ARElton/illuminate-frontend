import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Search from './Search';
import Categories from './Categories';
import Login from './Login';
import App from './App';

function Header({query, setQuery, currentUser, setCurrentUser}) {

    const [catTog, setCatTog] = useState(false)

    function catClick(){
        setCatTog(!catTog)
    }

    return (
        <header>
        <h1>ILLUMINATE</h1>
        <nav>
            <NavLink 
                exact 
                to="/" 
                className="button">
                Home
            </NavLink>
            <button 
                onClick={catClick}
                className="button">
                Categories
            </button>
            <NavLink 
                to="/patterns/new" 
                className="button">
                Add Pattern
            </NavLink>
            <NavLink 
                to="/login" 
                className="button" 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}>
                Login
            </NavLink>
            <button className="button"> {currentUser ? currentUser.username : "hello user"} </button>
        </nav>
        {catTog ? <Categories /> : null}
        <Search 
            query={query} 
            setQuery={setQuery}/>
        </header>
        
    )
}

export default Header;
