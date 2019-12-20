import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import reducers from './main/reducers'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))
