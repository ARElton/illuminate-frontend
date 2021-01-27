import React, {useState} from "react";
import { useLocation, useHistory} from 'react-router-dom';
import ProjectTile from './ProjectTile'


function PatternView({pattern, projects, currentUser, updateProjects, onRemoveProject, onEditProject}) {
    const location = useLocation()
    let history = useHistory()

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
            onEditProject={onEditProject}
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
            history.push("/profile")
          })
    }

    return (
        <div className="pattern-list">
            <div className="pattern-show">
                <h1>{name}</h1>
                <p className="cat-p">{category}</p>
                <img src={image} alt={description} />
                <p>{description}</p>
            </div>
            <div>
                <ul className="project-cards-list">
                    {currentUser ? 
                    <button onClick={handleCreateProject} className="create-project">SAVE THIS PATTERN!</button> : 
                    null}
                    {projectComponents}
                </ul>
            </div>
        </div>
    )
}

export default PatternView;