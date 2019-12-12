/**
 * Action constants
 */
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILED";
const LOGOUT = "LOGOUT";

/**
 * Other constants
 */
const USER_PERMISSIONS = {
    admin: ["/overview", "/sales", "/purchases", "/stocks", "/orders", "/customers", "/financial"],
};

/**
 * Action creators
 */
const requestLogin = () => ({
    type: LOGIN_REQUEST,
    loggingIn: true,
});

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user: user,
});

const loginFailure = () => ({
    type: LOGIN_FAILURE,
    error: true,
});

const logout = () => ({
    type: LOGOUT,
});

export {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    USER_PERMISSIONS,
    requestLogin,
    loginSuccess,
    loginFailure,
    logout,
};
