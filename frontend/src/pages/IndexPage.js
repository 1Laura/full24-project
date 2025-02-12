import React, {useEffect, useState} from 'react';
import http from "../plugins/https";

const IndexPage = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        http("http://localhost:2002/posts")
            .then(data => {
                console.log(data.posts)
                setAllPosts(data.posts);
            })
    }, []);


    return (
        <div className="container d-flex">
            <h3>Index page</h3>
            {allPosts.map((post, index) =>
                <div className="post-card flex-wrap" key={index}>
                    <img src={post.imageUrl} alt=""/>
                    <p>{post.title}</p>
                </div>
            )}

        </div>
    );
};

export default IndexPage;