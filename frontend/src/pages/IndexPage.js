import React, {useEffect, useState} from 'react';
import http from "../plugins/https";
import SinglePost from "../components/SinglePost";

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
        <div className="container">
            <h3>All posts</h3>
            <div className=" d-flex">
                {allPosts.map((post, index) =>
                    <SinglePost key={index} userPost={post}/>
                )}
            </div>
        </div>
    );
};

export default IndexPage;