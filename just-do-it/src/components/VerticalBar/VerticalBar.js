import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./VerticalBar.css"

const VerticalBar = ({ tasks }) => {
	const data = {
		labels: ['To do', 'In progress', 'Done'],
		datasets: [
			{
				data: tasks,
				label: 'Tasks to do',
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

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	}

	return (
		<>
			<section className='vertical-bar-section'>
				<h1 className='vertical-bar-section__title'>Team progress</h1>
				<section className='vertical-bar-section__graph'>
					<Bar data={data} options={options} />
				</section>
			</section>
		</>
	)
}

export default VerticalBar;