import React from "react";
import "./scss/target.scss";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Menu from "../assets/menu.svg";

export default function Target(props) {
  return (
    <article className="target">
      <figure className="target__menu">
        <img src={Menu} alt="" />
      </figure>

      <div className="target__title">
        <h2>Design Figma</h2>
        <small>Performlayout for platzi master x day test...</small>
      </div>

      <div className="target__footer">
        <div>
          <small>06-03-2021</small>
        </div>
        <figure>
          <img src={Avatar1} alt="" />
          <img src={Avatar2} alt="" />
        </figure>
      </div>
    </article>
  );
}
