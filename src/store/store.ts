import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers/index"
import createSagaMiddleware from "redux-saga"
import occasionsSaga from "./sagas/occasions"
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    
    sagaMiddleware.run(occasionsSaga)
    return store
}