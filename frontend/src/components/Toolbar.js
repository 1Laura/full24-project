import React from 'react';
import {Link} from "react-router-dom";


const Toolbar = () => {

    return (
        <div className="m-3 d-flex">
            <Link to="/" className="p-2">Register/Login</Link>
            <Link to="/color" className="p-2">Inventory</Link>
        </div>
    );
};

export default Toolbar;