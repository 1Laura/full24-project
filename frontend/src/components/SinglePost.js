import React from 'react';
import {useNavigate} from "react-router-dom";

const SinglePost = ({userPost}) => {
    const navigate = useNavigate();

    function deletePost() {
        const deletePostInfo = {
            id: userPost.id,
        }

        const option = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(deletePostInfo),
        };

        fetch("http://localhost:2002/deletepost" + userPost.id, option)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    if (location.pathname === "/") {
                        deletePost(postInfo.id)
                    } else {
                        navigate("/")
                    }
                }
            })
    }

    return (
        <div className="post-card flex-wrap" key={userPost.index}>
            <img src={userPost.imageUrl} alt=""/>
            <p>{userPost.title}</p>
            <button onClick={deletePost} className="m-2">Delete</button>
        </div>
    );
};

export default SinglePost;