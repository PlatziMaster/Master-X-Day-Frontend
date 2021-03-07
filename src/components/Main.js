import React from 'react'
import Layout from './layout'
import DasboardDetail from '../views/dasboard-detail'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from '../views/dashboard';

export default function Main(props) {
    return (
        <Router>
            <Layout>
                {/* <Switch>
                    <Route exact path="/" component={DasboardDetail} />
                    <Route path="/dashboard/:id" component={Layout} />
                </Switch> */}
                <Dashboard/>
            </Layout>
        </Router>
    )
}
