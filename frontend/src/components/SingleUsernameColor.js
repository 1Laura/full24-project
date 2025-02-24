import React from 'react';

const SingleUsernameColor = ({selectedColor}) => {

    return (
        <div className="card m-3 text-center" style={{backgroundColor: selectedColor}}>
            <h3>Username</h3>
        </div>
    );
};

export default SingleUsernameColor;