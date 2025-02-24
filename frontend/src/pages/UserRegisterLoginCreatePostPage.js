import React from 'react';
import UserRegister from "../components/UserRegister";
import UserLogin from "../components/UserLogin";
import CreatePost from "../components/CreatePost";

const UserRegisterLoginCreatePostPage = () => {
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
            <div className="m-5">
                <CreatePost/>
            </div>
        </div>
    );
};

export default UserRegisterLoginCreatePostPage;