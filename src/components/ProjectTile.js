import React, {useState} from "react";
import { useLocation } from 'react-router-dom';

function ProjectTile({project, image, favorite, onRemoveProject, onEditProject}) {
    const [newImg, setNewImg] = useState(image)
    const location = useLocation()

    function handleEdit(event){
        event.preventDefault()
        fetch(`http://localhost:3000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({image: newImg, favorite: true})
          })
          .then((r) => r.json())
          .then(editedProject => {
            onEditProject(editedProject)
          })
    }
    
    function handleDelete(){
        fetch(`http://localhost:3000/projects/${project.id}`, {
            method: "DELETE"
          })
          onRemoveProject(project.id)
    }

    return (
        <li className="project-card">
            <div className="project-card-detail">
                <h4>{favorite ? "Complete!": "Work in Progress"}</h4>
                <a href={image} target="_blank"><img src={image}  /></a>
            </div>
            {(location.pathname === "/profile") ? 
                <div className="pro-CRUD">
                    {project.favorite ? null : 
                    <>
                    <form>
                        <label>add an image of your completed project:</label>
                        <input 
                            className="project-input"
                            type="text"
                            name="image"
                            placeholder="Image Link"
                            value={newImg}
                            onChange={(event) => setNewImg(event.target.value)}
                        />
                    </form>
                    <button className="pro-add" onClick={handleEdit} value="edit">Add Image</button></>}
                    <button className="pro-delete" onClick={handleDelete} value="delete">Delete Project</button>
                </div> : null}
        </li>
    )
}

export default ProjectTile;