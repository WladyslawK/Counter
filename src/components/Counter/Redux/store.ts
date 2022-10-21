import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer/CounterReducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)