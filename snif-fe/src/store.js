import { createStore } from "redux";
import AppState from './reducers/AppStateReducer';
import axios from "axios";

// const getAuth = async () => {
//     const res = await fetch("http://localhost:9000/api/users", {
//         credentials: "same-origin",
//     });

//     if (res.status === 200) {
//         let data = await res.json();

//         return {
//             user: data,
//         };
//     }
    
//     return {};
// }

const getAuth = async () => {
    try {
        const res = await axios.get("http://localhost:9000/api/users", {
            withCredentials:true,
        });
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