import { combineReducers } from 'redux'
import { occasionReducer } from './occasions/reducer'

const rootReducer = combineReducers({
    occasions: occasionReducer
})

export default rootReducer