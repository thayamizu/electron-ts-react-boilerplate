import { createStore } from "redux";
import * as Reducer from "./modules/Counter";

export const counterStore = createStore(Reducer.counterReducer);

export type StoreType = ReturnType<typeof counterStore.getState>;
