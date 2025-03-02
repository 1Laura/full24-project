import React, {useRef, useState} from 'react';
import http from "../plugins/https";

const UserRegister = () => {
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async () => {

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (!username || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        const response = await http.post("http://localhost:2001/register", {username, password});

        console.log(response)

    };

    return (
        <div style={{maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px"}}>
            <h2>User Registration</h2>
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
            <div style={{marginBottom: "10px"}}>
                <label>Confirm Password:</label>
                <input type="password" ref={confirmPasswordRef} style={{width: "100%", padding: "8px", marginTop: "5px"}}/>
            </div>
            <button
                onClick={handleSubmit}
                style={{width: "100%", padding: "10px", background: "#007BFF", color: "white", border: "none", cursor: "pointer"}}
            >
                Register
            </button>
        </div>
    );
};

export default UserRegister;