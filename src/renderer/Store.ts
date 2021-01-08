import { createStore, combineReducers } from "redux";
import { counterReducer } from "./containers/CounterModule";

export const counterStore = createStore(
    combineReducers({
        counter: counterReducer,
    })
);

export type StoreType = ReturnType<typeof counterStore.getState>;
