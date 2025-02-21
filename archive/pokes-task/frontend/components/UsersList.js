import React, {useEffect} from 'react';
import SingleUser from "./SingleUser";
import useStore from "../store/main";
import http from "../plugins/https";

const UsersList = () => {
    const {setUsers, users} = useStore(state => state);


    useEffect(() => {
        http("http://localhost:2001/allUsers")
            .then(data => {
                console.log(data.users)
                setUsers(data.users);
            })
    }, []);

    return (
        <div className="d-flex flex-wrap">
            {users.map((user) =>
                <SingleUser key={user.secretKey} userInfo={user}/>
            )}
        </div>
    );
};

export default UsersList;