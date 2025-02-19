import React, {useEffect} from 'react';
import useStore from "../store/main";
import SingleUser from "../components/SingleUser";
import http from "../plugins/https"

const UsersListPage = () => {
    const {setUsers, users} = useStore(state => state);

    useEffect(() => {
        http("http://localhost:2001/allUsers")
            .then(data => {
                console.log(data)
                if (data.users) {
                    setUsers(data.users);
                } else {
                    setUsers([]); // Fallback to an empty array
                }

            })
    }, []);

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