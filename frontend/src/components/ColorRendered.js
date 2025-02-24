import React, {useEffect, useState} from 'react';
import SingleUsernameColor from "./SingleUsernameColor";

const ColorRendered = () => {
    const [colors, setColors] = useState([]);

    function getUserColor() {
        // useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }

        fetch("http://localhost:2001/getcolor", options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data.error && data.userColors) {
                    setColors(data.userColors);
                }
            })
        // }, []);
    }


    return (
        <>
            <button onClick={getUserColor}>Get color</button>

            {colors.length > 0 ? (
                colors.map((color, index) => (
                    <div key={index} className="card m-3 text-center" style={{backgroundColor: color.color}}>
                        <h3>{color.username}</h3>
                    </div>
                ))
            ) : (
                <p>No colors found</p>
            )}
        </>
    );
};

export default ColorRendered;