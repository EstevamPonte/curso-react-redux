import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'teste 1',
            done: true
        }, {
            _id: 2,
            description: 'teste 2',
            done: false
        }, {
            _id: 3,
            description: 'teste 3',
            done: false
        }]
    })
})

export default rootReducers