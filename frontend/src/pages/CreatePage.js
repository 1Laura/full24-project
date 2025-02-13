import React, {useRef} from 'react';


const CreatePage = () => {
    const titleRef = useRef();
    const imageRef = useRef();

    function create() {
        const post = {
            title: titleRef.current.value,
            imageUrl: imageRef.current.value,
        };
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post),
        };
        fetch("http://localhost:2002/create", options)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    return console.log("bad error from frontend")
                }
                console.log(data)
            });
        titleRef.current.value = "";
        imageRef.current.value = "";
    }

    return (
        <div className="container">
            <h2>Create Post</h2>
            <input type="text" placeholder="Enter title" ref={titleRef}/>
            <input type="text" placeholder="Enter image url" ref={imageRef}/>
            <button onClick={create}>Create</button>
        </div>
    );
};

export default CreatePage;