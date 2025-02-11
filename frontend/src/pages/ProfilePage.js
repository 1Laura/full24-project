import React, {useRef, useState} from 'react';
import useUserStore from "../store/main";
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {
    const {currentUser, updateAvatar, deleteProfile} = useUserStore();
    const avatarUrlRef = useRef();
    const navigate = useNavigate();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    function updateUserAvatar() {
        const newUserAvatarUrl = avatarUrlRef.current.value;
        console.log(newUserAvatarUrl);

        if (newUserAvatarUrl.trim() !== "") {
            updateAvatar(newUserAvatarUrl);
            avatarUrlRef.current.value = "";
        }
    }

    function deleteOwnProfile() {
        const password = passwordRef.current.value.trim();
        if (password === "") {
            setError("Please enter your password.");
            return;
        }

        deleteProfile(password, navigate);
    }

    return (
        <div className={"container"}>
            <img src={currentUser.avatar} alt=""/>
            <p>{currentUser.username}</p>
            <input type="text" placeholder="Enter avatar url" ref={avatarUrlRef}/>
            <button onClick={updateUserAvatar}>Update avatar</button>

            <h3>Delete Profile</h3>
            <input type="password" placeholder="Enter your password" ref={passwordRef}/>
            <button onClick={deleteOwnProfile} style={{color: "red"}}>Delete Profile</button>

            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
};

export default ProfilePage;

// https://fastly.picsum.photos/id/958/200/300.jpg?hmac=oCwv3AFzS5VqZv3nvDJ3H5RzcDH2OiL2g-GGwWL5fsI