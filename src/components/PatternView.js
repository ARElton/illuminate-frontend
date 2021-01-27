import React, {useParams, useState, useEffect} from "react";
import { BrowserRouter as Link, useLocation} from 'react-router-dom';
import ProjectTile from './ProjectTile'


function PatternView({pattern, projects, currentUser, updateProjects, onRemoveProject}) {
    
    const {id, name, image, description, category} = pattern
    const [project, setProject] = useState(null)

  
    const projectComponents = projects.filter((project) => {
        return project.pattern_id === id && project.favorite
    })
     .map((project) => 
        <ProjectTile 
            key={project.id} 
            image={project.image} 
            username={project.user_id} 
            currentUser={currentUser}
            pattern={pattern}
            favorite={project.favorite}
            onRemoveProject={onRemoveProject}
        />
    )

    function handleCreateProject() {
        const newProjObj = {
            user_id: currentUser.id,
            pattern_id: id,
            image: pattern.image,
            favorite: false
          }
          fetch(`http://localhost:3000/projects/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newProjObj),
          })
          .then(r=>r.json())
          .then(newProj => {
            updateProjects(newProj)
            setProject(newProj)
          })
    }

    return (
        <div className="pattern-list">
            <div className="pattern-show">
                <h1>{name}</h1>
                <img src={image} alt={description} />
                <p>{description}</p>
                <p>{category}</p>
                
            </div>
            <div>
                <h2>Completed Projects</h2>
                <button 
                    onClick={handleCreateProject} 
                    className="create-project">
                    Create New Project
                </button>
                <ul className="project-cards">{projectComponents}</ul>
                
            </div>
        </div>
    )
}

export default PatternView;