import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Ejecutado', 'En ejecución', 'Pendiente'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const PieChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Pie Chart</h1>
    </div>
    <Pie data={data} />
  </>
)

export default PieChart