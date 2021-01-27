import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ProjectTile from './ProjectTile'

function Profile({currentUser, projects, onRemoveProject, onEditProject}) {
    let history = useHistory()
    useEffect(() => {
        if (!currentUser) {
            history.push("/login")
        }
    }, [])

    const thisUserProjs = projects.filter((project)=> {
        return project.user_id === currentUser.id
      })
    const projectComponents = thisUserProjs.map((project) => 
        <ProjectTile 
            key={project.id}
            project={project}
            image={project.image}
            onRemoveProject={onRemoveProject}
            onEditProject={onEditProject}
            favorite={project.favorite}
        />
    )

    
    return (
        <div className="pattern-list">
            <h1>Your Projects</h1>
            <ul className="pattern-card-list">{projectComponents}</ul>
        </div>
    )
}

export default Profile;