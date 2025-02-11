import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import useUserStore from "../store/main";

const Toolbar = () => {
    const {currentUser, logUser, logoutUser} = useUserStore();
    const navigate = useNavigate();
    console.log(currentUser)
    return (
        <div className="container-fluid">
            <div className="m-3">
                <Link to="/" className="p-2">Login</Link>
                <Link to="/register" className="p-2">Register</Link>
                {currentUser && logUser && <Link to="/profile" className="p-2">Profile</Link>}
                {currentUser && logUser && <button onClick={() => logoutUser(navigate)}>Logout</button>}
                {currentUser && logUser && <span className="px-3">{currentUser.username}</span>}

            </div>
        </div>
    );
};

export default Toolbar;