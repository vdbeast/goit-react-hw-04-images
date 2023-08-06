import React from "react";
import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="Loader">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        </div>
    )
};

export default Loader;