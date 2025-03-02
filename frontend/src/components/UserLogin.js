import React, {useRef, useState} from 'react';
import http from "../plugins/https";
import {useNavigate} from "react-router-dom";

const UserLogin = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (!username || !password) {
            setError("All fields are required");
            return;
        }

        const response = await http.post("http://localhost:2001/login", {username, password});

        console.log(response)
        if (response.success) {
            localStorage.setItem("token", response.token);
            navigate("/inventory");
        }
    };

    return (
        <div style={{maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px"}}>
            <h2>User Login</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color: "green"}}>{success}</p>}

            <div style={{marginBottom: "10px"}}>
                <label>Username:</label>
                <input type="text" ref={usernameRef} style={{width: "100%", padding: "8px", marginTop: "5px"}}/>
            </div>
            <div style={{marginBottom: "10px"}}>
                <label>Password:</label>
                <input type="password" ref={passwordRef} style={{width: "100%", padding: "8px", marginTop: "5px"}}/>
            </div>

            <button
                onClick={handleSubmit}
                style={{width: "100%", padding: "10px", background: "#007BFF", color: "white", border: "none", cursor: "pointer"}}
            >
                Login
            </button>
        </div>
    );
};

export default UserLogin;