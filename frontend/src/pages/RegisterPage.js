import React, {useRef} from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const {setUsers, setError} = useStore(state => state);

    const refs = {
        username: useRef(),
        password1: useRef(),
        password2: useRef()
    };

    function registerUser() {
        const user = {
            username: refs.username.current.value.trim(),
            password1: refs.password1.current.value,
            password2: refs.password2.current.value
        };

        const options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        };
        fetch("http://localhost:2001/register", options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    return setError(data.message)
                }
                setUsers(data.users);
                navigate("/login")
            })
    }

    return (
        <div className="container">
            <h2>Register page</h2>
            <div className="d-block">
                <input type="text" className="d-block m-2" placeholder="Enter username" ref={refs.username}/>
                <input type="password" className="d-block m-2" placeholder="Enter password" ref={refs.password1}/>
                <input type="password" className="d-block m-2" placeholder="Repeat password" ref={refs.password2}/>
                <button onClick={registerUser} className="d-block m-2">Register user</button>
            </div>
        </div>
    );
};

export default RegisterPage;