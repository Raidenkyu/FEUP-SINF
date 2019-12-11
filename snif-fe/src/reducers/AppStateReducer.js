import { combineReducers } from "redux";

import userState from "./UserReducer";

const appState = combineReducers({
    user: userState,
});

export default appState;
