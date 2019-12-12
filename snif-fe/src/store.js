import { createStore } from "redux";
import AppState from './reducers/AppStateReducer';
import axios from "axios";

// TODO: fetch from API
// const initialState = {
//     user: {
//         username: "admin",
//         role: "admin",
//     }
// };
const getAuth = async () => {
    try {
        const res = await axios.get("http://localhost:9000/api/users");
        const { data } = res.data;

        return {
            user: data
        };
    } catch (error) {
        return {};
    }
}

const initialState = {
    auth: getAuth(),
};

const store = createStore(AppState, initialState);

export default store;