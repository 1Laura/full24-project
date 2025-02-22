import React, {useRef, useState} from 'react';

const UserLogin = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async () => {
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        if (!user.username || !user.password) {
            setError("All fields are required");
            return;
        }
        setError("");

        try {
            const response = await fetch("http://localhost:2001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();
            console.log(data);

        } catch (err) {
            setError(err.message);
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