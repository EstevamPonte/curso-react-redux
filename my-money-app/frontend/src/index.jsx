import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

import {createStore, applyMiddleware} from 'redux'
import reducers from './main/reducers'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))
