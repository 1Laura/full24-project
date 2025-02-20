import React, {useEffect} from 'react';
import useStore from "../store/main";
import NotificationItem from "../components/NotificationItem";

const UserProfilePage = () => {
    const {currentUser, notifications, setNotifications} = useStore(state => state)
    useEffect(() => {
        if (currentUser) {
            (async () => {
                const response = await fetch("http://localhost:2001/getnotifications", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({secretKey: currentUser.secretKey})
                });
                const data = await response.json();
                setNotifications(data.notifications);
            })();
        }
    }, [currentUser]);
    return (
        <div className="container">
            <h2>{currentUser?.username}'s Profile</h2>
            <h3>Notifications:</h3>
            {notifications.map((notif, index) => (
                <NotificationItem key={index} notif={notif} />
            ))}
        </div>
    );
};

export default UserProfilePage;