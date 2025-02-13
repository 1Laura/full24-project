import React, {useEffect} from 'react';
import http from "../plugins/https";
import SinglePost from "../components/SinglePost";
import useStore from "../store/main";

const IndexPage = () => {
    const {setPosts, posts} = useStore(state => state);

    useEffect(() => {
        http("http://localhost:2002/posts")
            .then(data => {
                console.log(data.posts)
                setPosts(data.posts);
            })
    }, []);


    return (
        <div className="container">
            <h3>All posts</h3>
            <div className=" d-flex">
                {posts.map((post, index) =>
                    <SinglePost key={index} userPost={post}/>
                )}
            </div>
        </div>
    );
};

export default IndexPage;