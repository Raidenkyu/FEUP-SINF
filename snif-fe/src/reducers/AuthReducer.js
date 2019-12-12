import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/AuthActions";

const initialState = {};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: action.loggingIn,
            };

        case LOGIN_SUCCESS:
            return {
                user: action.user,
            };

        case LOGIN_FAILURE:
            return {
                error: action.error,
            };

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
};

export default authentication;
