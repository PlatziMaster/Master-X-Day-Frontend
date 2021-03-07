import React, { useEffect, useState }  from 'react'
// import './scss/mobile-card-container.scss'
// import './scss/dashboard-item.scss'
import { Link } from 'react-router-dom'

export default function DashboardItem(props) {

    return (
        <div className="card__content">
            <h3>{props.title}</h3>
        </div>
    )
}