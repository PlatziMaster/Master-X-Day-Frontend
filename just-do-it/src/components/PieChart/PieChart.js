import React from 'react';
import { Pie } from 'react-chartjs-2';
import "./PieChart.css"

export const PieChart = ({ lists, cards }) => {
  const data = {
    labels: lists.map(list => list.name),
    datasets: [
      {
        data: lists.map(list => {
          const newList = cards.filter(card => card.idList === list.id);
          return newList.length
        }),
        backgroundColor: [
          'rgba(244, 67, 54)',
          'rgba(255, 160, 0)',
          'rgba(193, 238, 146)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
    	<section className='pie-section'>
				<h1 className='pie-section__title'>Team progress</h1>
				<section className='pie-section__graph'>
        <Pie data={data} />
				</section>
			</section>
    </>
  )
}

export default PieChart