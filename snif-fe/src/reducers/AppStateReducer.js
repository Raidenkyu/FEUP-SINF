import { combineReducers } from "redux";

import authentication from "./AuthReducer";

const appState = combineReducers({
    auth: authentication,
});

export default appState;
