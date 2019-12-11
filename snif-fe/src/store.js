import { createStore } from "redux";
import AppState from './reducers/AppStateReducer'

// TODO: fetch from API
const initialState = {
    user: {
        username: "admin",
        role: "admin",
    }
};

const store = createStore(AppState, initialState);

export default store;