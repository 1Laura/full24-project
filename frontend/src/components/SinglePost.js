import React from 'react';

const SinglePost = ({userPost}) => {
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

        fetch("http://167.99.138.67:1111/deletepost", option)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    if (location.pathname === "/") {
                        removePost(postInfo.id)
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