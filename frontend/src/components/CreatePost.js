import React, {useState} from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        if (!title || !description) {
            alert("Both fields are required");
            return;
        }

        const postData = {title, description};

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(postData),
        };

        fetch("http://localhost:2001/createpost", options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })

        setTitle("");
        setDescription("");
    };

    return (
        <div>
            <h2>Create Post</h2>

            <div style={{marginBottom: "10px"}}><input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div style={{marginBottom: "10px"}}>
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <button onClick={handleSubmit}>Create Post

            </button>

        </div>
    );
};
export default CreatePost;