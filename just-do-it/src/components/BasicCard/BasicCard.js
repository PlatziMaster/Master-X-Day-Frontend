import React from "react";
import "./BasicCard.css";

const BasicCard = ({children}) => {
  return (
    <>
      <section className="card-hero">
        <h3 className="card-hero__title"></h3>
        <section className="card-hero__task-list">
          {children}
        </section>
        <button></button>
      </section>
    </>
  );
};

export default BasicCard;
