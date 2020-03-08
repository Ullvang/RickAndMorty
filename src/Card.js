import React from "react";
import Style from "./card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`./character?${props.item.id}`}>
      <div className={Style.card}>
        <img
          className={Style.image}
          src={props.item.image}
          alt={props.item.name}
        />
        <p>{props.item.name}</p>
        <p>{props.item.status}</p>
        <p>{props.item.species}</p>
      </div>
    </Link>
  );
}

export default Card;
