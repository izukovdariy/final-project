import {applyMiddleware, createStore} from 'redux'
import {reducer} from '../reducers/reducer'
import thunk from "redux-thunk";

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('app_state', serialisedState);
    } catch (err) {

    }
};
const loadState = () => {
    try {
        const serialisedState = localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};
const oldState = loadState();
const store = createStore(reducer,oldState, applyMiddleware(thunk));
store.subscribe(()=> saveState(store.getState()));
export default store;