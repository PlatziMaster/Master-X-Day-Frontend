import React, { useEffect, useState } from 'react';
import styles from './Cards.module.css';

import arrowLeftIcon from '../../images/arrowLeft.svg';
import boxIcon from '../../images/box.png';
import { useRouteMatch } from 'react-router';
import axios from 'axios';

function Cards(props)
{
  const [data, setData] = useState({
    cards: [],
    title: ''
  });
  const routeMatch = useRouteMatch()
  
  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = async () => {
    // llamada a la api
    // https://api.trello.com/1/boards/<boardId>/cards?key=<apiKey>&token=<token>
    let resCards = await axios.get('')
    const updatedCards = resCards.data.filter(v => v.idList === routeMatch.params.idList)
    
    // https://api.trello.com/1/boards/<boardId>/lists?key=<apiKey>&token=<token>
    let resLists = await axios.get('')    
    const findList = resLists.data.find(v => v.id === routeMatch.params.idList)
    setData({
      cards: updatedCards,
      title: findList
    })
  }

  return (
    <div className={styles.Cards} style={{backgroundColor: '#FFACAC'}}>
      <div className={styles.CardsHeader}>
        <div className="HeaderArrowBack">
          <img src={arrowLeftIcon} alt="Arrow Left Icon"/>
        </div>
        <div className={styles.CardTitle}>
          <h1>{ data.title.name }</h1>
        </div>
        <div></div>
      </div>
      <div className={styles.CardsContainer}>
        <ul>
          {
            data.cards.map(i => 
              <li key={i.id}>
                <img src={boxIcon} alt=""/>
                {i.name}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default Cards;
