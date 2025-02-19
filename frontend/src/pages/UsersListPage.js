import React, {useEffect} from 'react';
import useStore from "../store/main";
import SingleUser from "../components/SingleUser";


const UsersListPage = () => {
    const {setUsers, users} = useStore(state => state);


    useEffect(() => {
        (async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            const response = await fetch("http://localhost:2001/allUsers");
            const data = await response.json();
            console.log("is users list pasge "+data);
            if (data.users) {
                setUsers(data.users);
            }
        })()
    }, []);

    return (
        <div className="container">
            <h2>users list</h2>
            <div className="d-flex flex-wrap">
                {users.map((user, index) => <SingleUser key={index} userInfo={user}/>
                )}
            </div>
        </div>
    );
};

export default UsersListPage;