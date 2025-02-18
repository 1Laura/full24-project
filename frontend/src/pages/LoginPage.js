import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import useStore from "../store/main";

const LoginPage = () => {
    const navigate = useNavigate();
    const {setError, setCurrentUser} = useStore(state => state);

    const refs = {
        username: useRef(),
        password1: useRef()
    };

    function loginUser() {
        const user = {
            username: refs.username.current.value.trim(),
            password1: refs.password1.current.value,
        };
        const options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        };

        fetch("http://localhost:2001/login", options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    return setError(data.message)
                }
                setCurrentUser({username: user.username, secretKey: data.secretKey});
                navigate("/users");
            })
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