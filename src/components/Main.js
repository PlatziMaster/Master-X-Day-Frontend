import React from 'react'
import './scss/header.scss'

import { Switch, Route } from "react-router-dom";
import Layout from './layout'



export default function Main(props) {
    return (
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/dashboard/:id" component={Layout} />
        </Switch>
    )
}
