import React from 'react';
import ColorRendered from "../components/ColorRendered";
import CreateColor from "../components/CreateColor";


const ColorPage = () => {
    return (
        <div className="container">
            <div className="d-flex">
                <div className="flex-grow-1">
                    <CreateColor/>
                </div>
                <div className="flex-grow-1">
                    <ColorRendered/>
                </div>
            </div>
        </div>
    );
};

export default ColorPage;