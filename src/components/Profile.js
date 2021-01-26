import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ProjectTile from './ProjectTile'

function Profile({currentUser, userProjects, onRemoveProject, onEditProject}) {

    const projectComponents = userProjects.map((project) => 
    <ProjectTile 
        key={project.id}
        project={project}
        image={project.image}
        onRemoveProject={onRemoveProject}
        onEditProject={onEditProject}
        favorite={project.favorite}
    />
    )

    return(
        <div className="pattern-list">
            <h1>Your Projects</h1>
            <ul className="pattern-cards">{projectComponents}</ul>
        </div>
    )
}

export default Profile;