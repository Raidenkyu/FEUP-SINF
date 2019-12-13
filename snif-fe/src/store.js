import { createStore } from "redux";
import AppState from "./reducers/AppStateReducer";

const store = createStore(AppState);

export default store;