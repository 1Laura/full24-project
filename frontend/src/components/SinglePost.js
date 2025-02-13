import React from 'react';
import http from "../plugins/https";
import useStore from "../store/main";

const SinglePost = ({userPost}) => {
    const {setPosts} = useStore(state => state);

    async function deletePost() {
        const data = await http("http://localhost:2002/delete/" + userPost.id);
        setPosts(data.posts);
    }

    return (
        <div className="post-card flex-wrap" key={userPost.id}>
            <img src={userPost.imageUrl} alt=""/>
            <p>{userPost.title}</p>
            <button onClick={deletePost} className="m-2">Delete</button>
        </div>
    );
};

export default SinglePost;