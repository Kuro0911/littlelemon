import React from "react";
import "./Banner.css";
import food from "../../utils/images/restauranfood.jpg";
function Banner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-title">Little Lemon</h1>
        <h3 className="banner-subtitle">Chicago</h3>
        <p className="banner-text">
          We are a family owned mediterranean restaurant,
          <br />
          foused on traditional
          <br />
          recipes served with a modern
          <br />
          twist.
        </p>
        <button className="banner-button">Reserve a Table</button>
      </div>
      <div className="banner-right">
        <img src={food} alt="" className="banner-image" />
      </div>
    </div>
  );
}

export default Banner;
