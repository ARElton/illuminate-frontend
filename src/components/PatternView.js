import React, {useParams} from "react";


function PatternView({pattern}) {
    
    const {id, name, image, description, category} = pattern
     console.log(pattern)
    return (
        <div className="pattern-view">
            <h1>{name}</h1>
            <img src={image} alt={description} />
            <p>{description}</p>
        </div>
    )
}

export default PatternView;