import React, {useRef} from 'react';
import useUserStore from "../store/main";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {loginUser, error} = useUserStore();

    const navigate = useNavigate();

    const usernameRef = useRef();
    const userPassword = useRef();

    function loginWithValidation() {
        const username = usernameRef.current.value.trim();
        const password = userPassword.current.value.trim();
        if (!username || !password) {
            alert("Please enter both username and password.");
            return
        }
        loginUser(username, password, navigate);
    }

    return (
        <div className={"container"}>
            <h2>Login page</h2>
            <input type="text" placeholder="Username" ref={usernameRef}/>
            <input type="password" placeholder="Password" ref={userPassword}/>
            <button onClick={loginWithValidation}>Login</button>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
};

export default LoginPage;