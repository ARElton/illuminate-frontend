import React, {useParams, useState} from "react";
import ProjectTile from './ProjectTile'


function PatternView({pattern, projects, currentUser, updateProjects}) {
    
    const {id, name, image, description, category} = pattern
    const [project, setProject] = useState({})


    const projectComponents = projects.filter((project) => {
        return project.pattern_id === id 
    })
     .map((project) => 
        <ProjectTile 
            key={project.id} 
            image={project.image} 
            username={project.user_id} 
        />
    )

    function handleCreateProject() {
        const newProjObj = {
            user_id: currentUser.id,
            pattern_id: id,
            image: null,
            favorite: true
          }
          fetch(`http://localhost:3000/projects/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: newProjObj
          })
          .then(r=>r.json())
          .then(newProj => {
            updateProjects(newProj)
            setProject(newProj)
          })
    }

    return (
        <React.Fragment>
            <div className="pattern-show">
                <img src={image} alt={description} />
                <p>{description}</p>
                <h1>{name}</h1>
                <h2>{category}</h2>
            </div>
            <div>
                <h2>Completed Projects</h2>
                <button 
                    onClick={handleCreateProject} 
                    className="create-project">Create Project
                </button>
                <ul className="project-cards">{projectComponents}</ul>
                <form>
                    <input 
                        type="text"
                        name="image"
                        placeholder="Image Link"
                        value={"/* project image value here*/"}
                    />
                </form>
            </div>
        </React.Fragment>
    )
}

export default PatternView;