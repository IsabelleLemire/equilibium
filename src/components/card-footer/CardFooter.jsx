import React from 'react'
import "./CardFooter.css"

const CardFooter = () => {
  return (
    <div className="card-footer">
        <img 
            src="https://placehold.co/60" 
            loading="lazy" 
            widht="60" 
            height="60"
        />
        <span className="card-footer__author">Isabelle Lemire</span>
    </div>
  )
}

export default CardFooter