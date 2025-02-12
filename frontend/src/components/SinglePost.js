import React from 'react';

const SinglePost = ({userPost}) => {
    return (
        <div className="post-card flex-wrap" key={userPost.index}>
            <img src={userPost.imageUrl} alt=""/>
            <p>{userPost.title}</p>
        </div>
    );
};

export default SinglePost;