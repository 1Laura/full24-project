import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="m-3 d-flex">
            <Link to="/" className="p-2">All users</Link>
            <Link to="/create" className="p-2">Create user</Link>
        </div>
    );
};

export default Toolbar;