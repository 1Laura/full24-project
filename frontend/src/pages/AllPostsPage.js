import React from 'react';
import useUserStore from "../store/main";
import {Link} from "react-router-dom";

const AllPostsPage = () => {
    const {posts} = useUserStore();

    return (
        <div className="container d-flex">
            {posts.map((post, index) =>
                <div className="post-card flex-wrap" key={index}>
                    <img src={post.imageUrl} alt=""/>
                    <p>{post.title}</p>
                    <Link to={`/posts/${post.id}`}>Read More...</Link>
                </div>
            )}

        </div>
    );
};

export default AllPostsPage;