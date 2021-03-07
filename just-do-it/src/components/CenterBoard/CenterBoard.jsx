import React from 'react'
import './CenterBoard.css'

const CenterBoard = () => {




  return (
    <>
      <div className="centerBoard__container">
            <div className="centerBoard__container--card">
              <p className="centerBoard__container--card-title">To Do</p>
            </div>
            <div className="centerBoard__container--card">
              <p className="centerBoard__container--card-title">In Progress</p>

            </div>
            <div className="centerBoard__container--card">
               <p className="centerBoard__container--card-title">Done</p>
            </div>
            
      </div>
    </>
  )
}

export default CenterBoard
