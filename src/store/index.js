import { createStore } from "redux";
import rootReducers from "../reducers";

function saveToLocalStorage (state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serializedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(rootReducers, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;