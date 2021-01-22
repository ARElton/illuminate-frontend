import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Search from './Search';
import Categories from './Categories';
import Login from './Login';

function Header() {


    return (
        <header>
        <h1>Illuminate</h1>
        <nav>
            <NavLink exact to="/" className="button">
            Home
            </NavLink>
            <NavLink to="/projects/categories" className="button">
            Categories
            </NavLink>
            <NavLink to="/patterns/new" className="button">
            Add Pattern
            </NavLink>
            <NavLink to="/login" className="button">
            Login
            </NavLink>
        </nav>
        <Search />
        </header>
    )
}

export default Header;
