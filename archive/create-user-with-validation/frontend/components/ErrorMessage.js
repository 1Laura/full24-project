import React from 'react';
import useStore from "../store/main";

const ErrorMessage = () => {
    const {error} = useStore(state => state);
    if (!error) return null;
    return (
        <div className="text-center">
            <p>{error}</p>
        </div>
    );
};

export default ErrorMessage;