import {combineReducers, legacy_createStore} from "redux";
import {counterReducerV1} from "../counterWithSettingsv1Reducer/counterReducerV1";

const rootReducer = combineReducers({
    counterReducerV1
})

export type StoreType = ReturnType<typeof rootReducer>

export const storeV1 = legacy_createStore(rootReducer)