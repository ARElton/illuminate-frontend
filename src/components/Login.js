import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

function Login({setCurrentUser}) {
    const [username, setUsername] = useState("")
    let history = useHistory()
    function handleSubmit(e) {
        e.preventDefault()
        const formData = { username }
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((data) => {
            setCurrentUser(data)
            history.push("/")
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="submit" className="button" value="Login" />
            </form>
        </div>
    )
}

export default Login; 