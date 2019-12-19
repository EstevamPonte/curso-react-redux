import React from 'react'
import { Route, Router, hashHistory, Redirect } from 'react-router'

import DashBorad from '../dashBoard/dashBoard'
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={DashBorad}/>
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)