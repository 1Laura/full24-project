import React from 'react';
import useColorStore from "../store/main";

const Component2 = () => {
    const setColor = useColorStore((state) => state.setColor);
    // const {setColor, darKazkasGaliButi} = useStore((state) => state);

    return (
        <div>
            <h3>Component 2</h3>
            <h5>Set Color:</h5>
            <input
                type="text"
                placeholder="Enter a color"
                className="p-2 border rounded mt-2"
                onChange={(e) => setColor(e.target.value)}
            />
        </div>
    );
};

export default Component2;