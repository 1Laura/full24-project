import React from 'react';
import useStore from "../store/main";

const NotificationItem = ({notif}) => {
    const {currentUser} = useStore();

    function pokeBack() {
        if (!currentUser) {
            return ("You must be logged in to poke back.");
        }
        const userInfo = {
            username: notif.sender,
            secretKey: currentUser.secretKey
        };

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userInfo})
        }
        fetch("http://localhost:2001/pokeback", options)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.log(`Error: ${data.message}`);
                } else {
                    console.log(`You poked back ${notif.sender}!`);
                }
            })
    }


    return (
        <div className="alert alert-info">
            {notif.sender} poked you!
            <button className="btn btn-warning ms-2" onClick={pokeBack}>Poke Back</button>
        </div>
    );
};

export default NotificationItem;