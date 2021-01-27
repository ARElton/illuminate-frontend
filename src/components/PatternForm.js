import React, {useState} from "react";

function PatternForm({updatePatterns}) {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/patterns", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                image: image,
                name: name,
                category: category,
                description: description
            }),
        })
        .then((r) => r.json())
        .then((data) => {
            updatePatterns(data)
        })
    }

    return(
        <div className="pattern-list">
            <form className="add-pattern-form" onSubmit={handleSubmit}>
                <h1>New Pattern</h1>
                <input 
                    type="text"
                    name="name"
                    placeholder="Project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text"
                    name="image"
                    placeholder="Image Link?"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input 
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label for="categories">Choose a category:</label>
                <select id="categories" name="categories" onChange={(e) => setCategory(e.target.value)}>
                    <option value={category}>Art Deco</option>
                    <option value={category}>Art Nouveau</option>
                    <option value={category}>Geometric</option>
                    <option value={category}>Tiffany</option>
                </select>
                <button type="submit">Add Pattern</button>
            </form>
        </div>
    )
}

export default PatternForm; 