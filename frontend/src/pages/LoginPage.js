import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const refs = {
        username: useRef(),
        password1: useRef()
    };

    function loginUser() {
        console.log("sfasf")
        navigate("/userslist")
    }

    return (
        <div className="container">
            <h2>Login page</h2>
            <div className="d-block">
                <input type="text" className="d-block m-2" placeholder="Enter username" ref={refs.username}/>
                <input type="password" className="d-block m-2" placeholder="Enter password" ref={refs.password1}/>
                <button onClick={loginUser} className="d-block m-2">Register user</button>
            </div>
        </div>
    );
};

export default LoginPage;