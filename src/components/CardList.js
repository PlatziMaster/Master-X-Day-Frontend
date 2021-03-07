import React from "react";
import "../styles/cardList.css";

const CardList = () => {
  return (
   <div className="containerCards">
       <div className="Card">
           <small className="Card__head">To do</small>
           <p className="Card__Number">7</p>
       </div>

       <div className="Card">
           <small className="Card__head">In Progress</small>
           <p className="Card__Number">3</p>
       </div>
       <div className="Card">
           <small className="Card__head">Done</small>
           <p className="Card__Number">10</p>
       </div>
   </div>
  );
};

export default CardList;
