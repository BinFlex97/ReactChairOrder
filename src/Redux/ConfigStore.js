import { combineReducers, createStore } from "redux"
import { chairListReducer } from "./Reducers/chairMapReducer"

const rootReducer = combineReducers({
    chairListReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());