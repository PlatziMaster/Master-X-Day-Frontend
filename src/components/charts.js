import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';

export default function Charts(Props) {
    console.log('Charts',Props.data)
    return (
        <div className={'chart__Container'}>

            <RadialChart
                data={Props.data}
                width={300}
                height={300} 
            />

            <div className='test'>
                {Props.data.map(item => <h1>{item.label} {item.angle}</h1>)}
            </div>
        </div>
    )
}

