import React from 'react'
import { Route, Router, IndexRoute, hashHistory, Redirect } from 'react-router'

import App from './app'
import DashBorad from '../dashBoard/dashBoard'
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashBorad}/>
            <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)