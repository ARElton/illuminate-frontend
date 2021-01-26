import React from "react";

function Categories({setCurrentSort}) {
    
    function handleClick(event){
        setCurrentSort(event.target.value)
    }

return (
    <nav className="category-nav">
        <button className="cat-butt" value="Art Deco Style" onClick={handleClick}>Art Deco</button>
        <button className="cat-butt" value="Art Nouveau Style" onClick={handleClick}>Art Nouveau</button>
        <button className="cat-butt" value="Geometric" onClick={handleClick}>Geometric</button>
        <button className="cat-butt" value="Tiffany Style" onClick={handleClick}>Tiffany</button>
        <button className="cat-butt" value="" onClick={handleClick}>All</button>
    </nav>
)
}

export default Categories; 