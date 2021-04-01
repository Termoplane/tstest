import { combineReducers } from 'redux'
import { occasionReducer } from './occasions'

const rootReducer = combineReducers({
    occasions: occasionReducer
})

export default rootReducer