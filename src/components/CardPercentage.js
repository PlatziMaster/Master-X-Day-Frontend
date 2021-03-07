import React from 'react'
import "../styles/box.css"
const CardPercentage = (props) => {

    const completed = props.completed

    return (
        <div className="containerBox">
        <div className="Box blue">
            <small className="Box__head">Completed vs Total</small>
            <p className="Box__Number">{`${completed} %`}</p>
        </div>
 
        <div className="Box green">
            <small className="Box__head">In Progress vs Total</small>
            <p className="Box__Number">50%</p>
        </div>
        
    </div>
    )
}

export default CardPercentage
