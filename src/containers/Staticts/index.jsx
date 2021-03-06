import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './styles.css';

const data = {
  datasets: [{
    responsive: false,
    data: [10, 20, 30],
    backgroundColor: [
      '#C0FFA2',
      '#FFFBA3',
      '#FF4081',
    ]
  }],
  labels: [
    'Completed',
    'In progress',
    'To do',
  ]
};

const Staticts = () => {
  return (
    <div className='Chart'>
      <h1>Your progress</h1>
      <div className='ContainerChart'>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default Staticts;