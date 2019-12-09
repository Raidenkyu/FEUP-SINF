import { combineReducers } from "redux";

import pathState from "./PathReducer";
import userState from "./UserReducer";

const appState = combineReducers({
    path: pathState,
    user: userState,
});

export default appState;
