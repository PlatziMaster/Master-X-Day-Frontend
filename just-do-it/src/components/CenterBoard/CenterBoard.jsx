// Import libraries
import React, { useState, useEffect } from 'react';
// Import styles
import './CenterBoard.css';

// Component
const CenterBoard = ({ list, cards }) => {
  // Set State
  const [cardsByList, setCardsByList] = useState([]);

  // Add cards to list
  useEffect(() => {
    const newList = cards.filter(card => card.idList === list.id);
    setCardsByList(newList);
  }, [cards, list])

  return (
    <div className="centerBoard__container--card">
      <h2>{cardsByList.length}</h2>
      <p className="centerBoard__container--card-title">{list.name}</p>
    </div>
  )
}

export default CenterBoard;
