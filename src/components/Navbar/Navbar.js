import React from "react";
import "./Navbar.css";
import Logo from "../../utils/svg/Logo";
function Navbar() {
  const btns = [
    { title: "home", href: "/" },
    { title: "about", href: "/about" },
    { title: "menu", href: "/menu" },
    { title: "reservation", href: "/reservation" },
    { title: "order online", href: "/order-online" },
    { title: "login", href: "/login" },
  ];
  return (
    <div className="navbar">
      <div className="nav-wrap">
        <div className="nav-left"><Logo/></div>
        <div className="nav-right">
          {btns.map((ele) => (
            <a className="nav-button" href={ele.href} key={ele.title}>
              {ele.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
