import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink, useLocation } from 'react-router-dom';

function ProjectTile({project, currentUser, image, pattern, favorite, onRemoveProject, onEditProject}) {

    
    const [newImg, setNewImg] = useState("")
    console.log(project)
    const location = useLocation()
    // const [id, user_id, pattern_id, image, favorite] = project

    // EDIT PROJECT
    // function handleCEdiProject() {
    //     const newProjObj = {
    //         user_id: currentUser.id,
    //         pattern_id: project.pattern_id,
    //         image: newImg,
    //         favorite: false
    //       }
    //       fetch(`http://localhost:3000/projects/${project.id}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: newProjObj
    //       })
    //       .then(r=>r.json())
    //       .then(newProj => {
    //         console.log(newProj)
    //       })
    // }
    function handleEdit(){
        //create object with image and favorite as true
        //fetch PATCH
        fetch(`http://localhost:3000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({image: newImg, favorite: true})
          })
          .then(r=>r.json())
          .then(project => {
            onEditProject(project)
          })
          
    }
    function handleDelete(){
        fetch(`http://localhost:3000/projects/${project.id}`, {
            method: "DELETE"
          })
          onRemoveProject(project.id)
    }

    // const {id, user_id, pattern_id, image} = project
    return (
        <li className="project-card">
            <div className="project-card-detail">
            <img src={image} alt={"username"} />
            <h4>{favorite ? "Complete" : "Work in Progress"}</h4>
            </div>
            {(location.pathname === "/profile") ? 
            <div className="pro-CRUD">
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
                <button onClick={handleEdit} value="edit">Add Image</button>
                <button className="pro-delete" onClick={handleDelete} value="delete">Delete Project</button>
            </div> : null}
        </li>
    )
}

export default ProjectTile;