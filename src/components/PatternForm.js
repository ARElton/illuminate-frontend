import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PatternForm() {

    return(
        <div className="new-pattern-form">
            <h2>New Pattern</h2>
            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Project name"
                />
                <input 
                    type="text"
                    name="image"
                    placeholder="Image Link?"
                />
                <label for="categories">Choose a category:</label>
                <select id="categories" name="categories">
                    <option value=""></option>
                </select>
                <input 
                    type="text"
                    name="description"
                    placeholder="Description"
                />
                <button type="submit">Add Pattern</button>
            </form>
        </div>
    )

}

export default PatternForm; 