import React, {useRef, useState} from 'react';

const CreateColor = () => {
    const [colorUser, setColorUser] = useState(null);
    const colorPickerRef = useRef();

    function handleColor() {
        const selectedColor = colorPickerRef.current.value;
        console.log(selectedColor)
        setColorUser(selectedColor);

        const colorData = {color: selectedColor};

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(colorData),
        };
        fetch("http://localhost:2001/createcolor", options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="container">
            <h2>Choose a Color</h2>
            <input type="color" ref={colorPickerRef}/>
            <button onClick={handleColor}>Add color</button>
        </div>
    );
};

export default CreateColor;