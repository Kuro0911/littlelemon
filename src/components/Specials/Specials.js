import React from "react";
import Card from "./Card/Card";
import "./Specials.css";
import gs from "../../utils/images/gs.jpg";
import ld from "../../utils/images/ld.jpg";
import bc from "../../utils/images/bc.jpg";

function Specials() {
  const cards = [
    {
      title: "Greek Salad",
      price: "12.99",
      src: gs,
      about:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Brushetta",
      price: "7.99",
      src: bc,
      about:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.",
    },
    {
      title: "Lemon Dessert",
      price: "5.00",
      src: ld,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="specials">
      <div className="specials-head-wrap">
        <h1 className="specials-title">This Weeks Specials!</h1>
        <button className="specials-button">Online Menu</button>
      </div>
      <div className="specials-body">
        {cards.map((ele) => (
          <Card card={ele} key={ele.title} />
        ))}
      </div>
    </div>
  );
}

export default Specials;
