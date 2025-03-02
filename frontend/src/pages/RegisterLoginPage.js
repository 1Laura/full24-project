import React from 'react';
import UserRegister from "../components/UserRegister";
import UserLogin from "../components/UserLogin";

const RegisterLoginPage = () => {
    return (
        <div className="container">
            <div className="d-flex">
                <div className="flex-grow-1">
                    <UserRegister/>
                </div>
                <div className="flex-grow-1">
                    <UserLogin/>
                </div>
            </div>
        </div>
    );
};

export default RegisterLoginPage;