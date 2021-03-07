import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';

export default function Charts(Props) {
    console.log('Charts',Props.data)
    let total = 0

    Props.data.map(x => total = parseInt(x.angle + total))


    return (
        <div className={'chart__Container'}>

            <RadialChart
                data={Props.data}
                width={300}
                height={300} 
            />

            <div className='test'>
                {Props.data.sort(function(a, b){
                if(a.label < b.label) { return -1; }
                if(a.label > b.label) { return 1; }
                return 0;
            }).map(item => 
                <h5 className='d-flex flex-column text-light'>
                    {item.label} <b>{parseFloat(item.angle / total * 100).toFixed(2)}% </b>
                </h5>)}

                {/* /total */}
            </div>
        </div>
    )
}

