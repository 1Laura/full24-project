import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import useUserStore from "../store/main";

const RegisterPage = () => {
    const {registerUser, error, setError} = useUserStore();

    const usernameRef = useRef();
    const userPass1Ref = useRef();
    const userPass2Ref = useRef();
    const navigate = useNavigate();

    function registerWithValidation() {
        const username = usernameRef.current.value.trim();
        const password1 = userPass1Ref.current.value;
        const password2 = userPass2Ref.current.value;

        if (!username || !password1 || !password2) {
            setError("All fields are required.");
            return;
        }

        if (password1.length < 6) {
            setError("The password must be at least 6 characters long.");
            return;
        }

        if (password1 !== password2) {
            setError("The passwords do not match.");
            return;
        }

        registerUser(username, password1);
        if (!error) navigate("/");


    }

    return (
        <div className={"container"}>
            <h2>Register page</h2>
            <input type="text" placeholder="Username" ref={usernameRef}/>
            <input type="password" placeholder="Enter Password" ref={userPass1Ref}/>
            <input type="password" placeholder="Repeat Password" ref={userPass2Ref}/>
            <button onClick={registerWithValidation}>Register</button>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
};

export default RegisterPage;