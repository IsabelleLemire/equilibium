import React from 'react';
import "./Image.css";

const Image = () => {
    return (
        <img 
            className="image" 
            src="https://placehold.co/600x400" 
            loading="lazy" 
            widht="600" 
            height="400"
        />
    );
};

export default Image;