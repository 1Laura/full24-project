import React from 'react';
import useUserStore from "../store/main";

const Component1 = () => {
    const username = useUserStore((state) => state);

    function sendUser() {
        const user = {
            username: "Laura",
            age: 40,
        }
        const options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user),
        }
        fetch("http://localhost:2001/user", options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="flex flex-col items-center p-4">
            <button onClick={sendUser}>Send User</button>
        </div>
    );
};

export default Component1;