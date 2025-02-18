import React from 'react';
import useStore from "../store/main";
import SingleUser from "../components/SingleUser";

const UsersListPage = () => {
    const {users} = useStore(state => state);
    return (
        <div className="container">
            <h2>users list</h2>
            <div className="d-flex flex-wrap">
                {users.map((user, index) =>
                    <SingleUser key={index} userInfo={user}/>
                )}
            </div>
        </div>
    );
};

export default UsersListPage;