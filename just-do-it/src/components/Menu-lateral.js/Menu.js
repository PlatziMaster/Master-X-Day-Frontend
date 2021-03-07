import React from "react";
import Logo from "../../assets/icon.png";
import Notifications from "../../assets/Frame.png";
import Calendario from "../../assets/calendario.png";
import Members from "../../assets/Members.png";
import Star from "../../assets/star.png";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="container">
        <li className="items">
          <a href="">
            {" "}
            <img src={Logo} alt="" />
          </a>
        </li>
        <li className="items">
          <a href="">
            {" "}
            <img src={Notifications} alt="" />
          </a>
        </li>
        <li className="items">
          <a href="">
            <img src={Calendario} alt="" />
          </a>
        </li>
      </ul>
      <ul className="container2">
        <li className="items">
          <a href="">
            <img src={Members} alt="" />
          </a>
        </li>
        <li className="items">
          <a href="">
            <img src={Star} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
