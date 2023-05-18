import React from 'react'
import "./CardFooter.css"

const CardFooter = (props) => {
  return (
    <div className="card-footer">
        <img 
            src="https://placehold.co/60" 
            loading="lazy" 
            width="60" 
            height="60"
        />
        <span className="card-footer__author">{props.author}</span>
    </div>
  )
}

export default CardFooter;