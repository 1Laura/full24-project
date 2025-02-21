import React from 'react';
import {Link} from "react-router-dom";
import useStore from "../store/main";

const Toolbar = () => {
    const { currentUser, setCurrentUser } = useStore(state => state);
    return (
        <div className="m-3 d-flex">
            {!currentUser ? (
                <>
                    <Link to="/login" className="p-2">Login</Link>
                    <Link to="/register" className="p-2">Register</Link>
                </>
            ) : (
                <>
                    <Link to="/users" className="p-2">Users List</Link>
                    <Link to={`/users/${currentUser.username}`} className="p-2">Profile</Link>
                    <button className="btn btn-danger ms-2" onClick={()=>setCurrentUser(null)}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Toolbar;