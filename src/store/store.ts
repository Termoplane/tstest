import { createStore, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
import createSagaMiddleware from "redux-saga"
import occasionsSaga from "./occasions/sagas"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Occasion } from "./occasions/types";

// The top-level state object
export interface IApplicationState {
	occasions: Occasion[];
}

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    
    sagaMiddleware.run(occasionsSaga)
    return store
}