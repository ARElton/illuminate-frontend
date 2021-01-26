import React, {useState} from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Search from './Search';
import Categories from './Categories';

function Header({query, setQuery, currentUser, setCurrentUser, setCurrentSort}) {

    const [catTog, setCatTog] = useState(false)

    function catClick(){
        setCatTog(!catTog)
    }

    function handleLogout(){
        setCurrentUser(null)
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

            {currentUser ? 
            <NavLink 
                to="/profile" 
                className="button">
                {currentUser.username}
            </NavLink> 
            : 
            <NavLink 
                to="/login" 
                className="button" 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}>
                Login
            </NavLink>}
            {currentUser ? 
            <button 
                onClick={handleLogout}
                className="button">
                Logout
            </button> : null}

        </nav>
        {catTog ? <Categories setCurrentSort={setCurrentSort} /> : null}
        <Search 
            query={query} 
            setQuery={setQuery}/>
        </header>
        
    )
}

export default Header;
