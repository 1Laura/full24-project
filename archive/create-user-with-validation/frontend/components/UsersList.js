import React from 'react';
import SingleUser from "./SingleUser";
import useStore from "../store/main";

const UsersList = () => {
    const {users} = useStore(state => state);
    return (
        <div className="d-flex flex-wrap">
            {users.map((user, index) =>
                <SingleUser key={index} userInfo={user}/>
            )}
        </div>
    );
};

export default UsersList;