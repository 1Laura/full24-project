import React from 'react';
import useColorStore from "../store/main";

const Component1 = () => {
    const color = useColorStore((state) => state.color);
    // const {color, darKazkasGaliButi} = useStore((state) => state);

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-xl">Selected Color</h2>
            <div className="color-box rounded-full mt-2" style={{backgroundColor: color}}/>
            <p className="mt-2 font-bold">{color}</p>
        </div>
    );
};

export default Component1;