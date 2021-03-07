import React from 'react'
import axios from 'axios';
import './scss/board.scss'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from './mobile-card-container'
import Task from './Target'


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