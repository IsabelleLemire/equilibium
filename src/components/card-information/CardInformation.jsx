import React from 'react';
import "./CardInformation.css";

const CardInformation = (props) => {
  return (
    <div className="card-information">
        <span className="right">{props.ethAmount}</span>
        <time className="left">{props.timeLeft}</time>
    </div>
  );
}; 

export default CardInformation;
