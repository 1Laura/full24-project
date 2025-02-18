import React from 'react';

const SingleUser = ({userInfo}) => {
    function poke() {
        console.log("poked")
    }
    function openProfilePage() {
        console.log("")
        // navigate("/profile")
    }

    return (
        <div className="post-card flex-wrap">
            <p onClick={openProfilePage} className="m-2">{userInfo.username}</p>
            <button onClick={poke} className="m-2">Poke</button>
        </div>
    );
};

export default SingleUser;