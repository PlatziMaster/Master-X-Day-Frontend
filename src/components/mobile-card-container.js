import React from 'react'
import './scss/mobile-card-container.scss'

export default function CardContainer(props) {
    return (
        <div className="col-md-4">
            <div className='card mb-3 mb-md-0 border-0'>
                <div className="card-header">
                    <div className="d-flex justify-content-between border-bottom-light align-items-center">
                        <h3>{props.title}</h3>
                        <span>{props.counter}</span>    
                    </div>
                    
                </div>
                <div className="card-body">
                    {props.children}
                </div>
                <div className="card-footer">
                    <p className="text-center mb-0">Add task</p>
                </div>
            </div>
        </div>
    )
}