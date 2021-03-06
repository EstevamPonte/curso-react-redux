import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducers'

const rootReducers = combineReducers({
    todo: todoReducer
})

export default rootReducers