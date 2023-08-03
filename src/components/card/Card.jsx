import React from "react";
import "./Card.css";
import Image from "../image/Image";
import CardTitle from "../card-title/CardTitle";
import CardBody from "../card-body/CardBody";
import CardInformation from "../card-information/CardInformation";
import CardFooter from "../card-footer/CardFooter";

const Card = (props) => {
  return (
    <article className="card">
        <Image />
        <CardTitle title={props.title} />
        <CardBody content={props.content} />
        <CardInformation ethAmount={props.ethAmount} timeLeft={props.timeLeft} />
        <CardFooter author={props.author} />
    </article>
  );
};


export default Card;