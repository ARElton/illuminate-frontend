import React, {useParams} from "react";


function PatternView({pattern}) {
    
    const {id, name, image, description, category} = pattern
     console.log(pattern)
    return (
        <div className="pattern-list">
        <h1>{name}</h1>
        </div>
    )
}

export default PatternView;