import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="m-3 d-flex">
            <Link to="/login" className="p-2">Login</Link>
            <Link to="/register" className="p-2">Register</Link>
            <Link to="/userslist" className="p-2">Users list</Link>
        </div>
    );
};

export default Toolbar;