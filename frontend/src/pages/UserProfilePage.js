import React from 'react';
import SingleUser from "../components/SingleUser";
import useStore from "../store/main";

const UserProfilePage = () => {
    const {users} = useStore(state => state)

    return (
        <div className="container">
            <h2>User profile page</h2>
            <div className="d-flex flex-wrap">
                <p>You were poked by username</p>
                <p>time</p>
            </div>
        </div>
    );
};

export default UserProfilePage;