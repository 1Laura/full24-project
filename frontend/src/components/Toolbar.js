import React from 'react';
import {Link} from "react-router-dom";


const Toolbar = () => {

    return (
        <div className="m-3 d-flex">
            <Link to="/" className="p-2">Example</Link>
            <Link to="/color" className="p-2">Color page</Link>
        </div>
    );
};

export default Toolbar;