import React from "react";
import "./Card.css";
function Card({ card }) {
  return (
    <div className="card">
      <img src={card.src} alt="" className="card-img" />
      <div className="card-body">
        <div className="card-head-wrap">
          <h1 className="card-title">{card.title}</h1>
          <h1 className="card-price">${card.price}</h1>
        </div>
        <p className="card-about">{card.about}</p>
        <br />
        <h1 className="card-order">Order a delivery</h1>
      </div>
    </div>
  );
}

export default Card;
