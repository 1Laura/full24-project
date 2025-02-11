import React, {useRef} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useUserStore from "../store/main";
import button from "bootstrap/js/src/button";

const SinglePostPage = () => {
    const {postId} = useParams();
    const navigate = useNavigate();

    const {posts, addComment, currentUser, likePost, deleteOwnComment, deleteOwnPost} = useUserStore();

    const commentRef = useRef();

    const post = posts.find(post => post.id === postId);

    function createPostComment() {
        const newComment = commentRef.current.value.trim();
        if (newComment) {
            addComment(postId, currentUser.username, newComment);
            commentRef.current.value = "";
        }
    }

    function likeUserPost() {
        likePost(postId, currentUser.username);
        console.log("sdsfasfd")
    }

    function deleteUserComment(postId, commentIndex) {
        if (currentUser) {
            deleteOwnComment(postId, currentUser.username, commentIndex);
        }
    }

    function deletePost() {
        if (currentUser && currentUser.username === post.author) {
            deleteOwnPost(postId, currentUser.username);
            navigate("/");
        }
    }

    return (
        <div className="container">
            <div>
                <img src={post.imageUrl} alt=""/>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button onClick={likeUserPost} disabled={post.likedBy.includes(currentUser?.username)}>Like {post.likes}</button>
                {currentUser?.username === post.author && <button onClick={deletePost}>Delete post</button>}
            </div>
            <div>
                <h5>Comments:</h5>
                {post.comments && post.comments.length > 0 ? (
                    post.comments.map((comment, index) =>
                        <div>
                            <p key={index}><strong>{comment.user}: </strong>{comment.text}</p>
                            {currentUser?.username === comment.user &&
                                <button onClick={() => deleteUserComment(postId, index)}>Delete comment</button>}
                        </div>
                    )) : (
                    <p>No comments yet.</p>
                )}

            </div>
            <div>
                <h5>Write Comments:</h5>
                <input type="text" placeholder="Enter your comment" ref={commentRef}/>
                <button onClick={createPostComment}>Create comment</button>
            </div>
        </div>
    );
};

export default SinglePostPage;