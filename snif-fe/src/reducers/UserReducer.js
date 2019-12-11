import { SET_USER, UNSET_USER } from "../actions/UserActions";

const initialState = null;

const userState = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user;

        case UNSET_USER:
            return null;

        default:
            return state;
    }
};

export default userState;
