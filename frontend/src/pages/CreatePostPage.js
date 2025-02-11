import React, {useRef} from 'react';
import useUserStore from "../store/main";
import {useNavigate} from "react-router-dom";

const CreatePostPage = () => {
    const {createPost} = useUserStore()
    const navigate = useNavigate();
    const imageUrlRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();

    function createUserPost() {
        const imageUrl = imageUrlRef.current.value.trim();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        createPost(imageUrl, title, description)
        navigate("/posts");
    }

    return (
        <div className="container">
            <h2>Create post</h2>
            <div>
                <input type="text" placeholder="Enter image url" ref={imageUrlRef}/>
                <input type="text" placeholder="Enter title" ref={titleRef}/>
                <input type="text" placeholder="Enter description" ref={descriptionRef}/>
                <button onClick={createUserPost}>Create post</button>
            </div>

        </div>
    );
};

export default CreatePostPage;