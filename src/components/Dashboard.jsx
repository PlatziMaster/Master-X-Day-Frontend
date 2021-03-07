import React from 'react';

import '../styles/Dashboard.scss';
import Card from './Card';

import toDoIcon from '../icons/to-do-list.svg';
import inProgressIcon from '../icons/gear.svg';
import doneIcon from '../icons/work-done.svg';
import '../styles/Card.scss';

export default function Dashboard() {
  return (
    <div className='dbContainer'>
      <div className="cards-container">
        <Card taskClassification='To-Do' icon={toDoIcon} percentage='20' />
        <Card taskClassification='In-progress' icon={inProgressIcon} percentage='35' />
        <Card taskClassification='Done' icon={doneIcon} percentage='45' />
      </div>
    </div>
  );
}
