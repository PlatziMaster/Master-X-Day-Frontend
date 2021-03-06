import React from 'react'
import './scss/board.scss'

export default function Layout(props) {
    return (
        <div className="board">
            <div className="container">
                <h3 className="text-white mb-3">{props.title}</h3>
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    )
}