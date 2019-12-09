import { UPDATE_PATH } from "../actions/PathActions";

const initialState = "/home";

const pathState = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PATH:
            return action.path;

        default:
            return state;
    }
};

export default pathState;
