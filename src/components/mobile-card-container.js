import React from 'react'
import './scss/mobile-card-container.scss'

export default function CardContainer(props) {
    return (
        <div className='card-container card'>
            <div class="card-header">To do</div>
            <div class="card-body">
               <p class="card-text"></p>
            </div>
        </div>
    )
}