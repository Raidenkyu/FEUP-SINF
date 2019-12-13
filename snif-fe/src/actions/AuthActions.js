/**
 * Action constants
 */
const TOKEN_REQUEST = "TOKEN_REQUEST";
const TOKEN_SUCCESS = "TOKEN_SUCCESS";
const TOKEN_FAILURE = "TOKEN_FAILURE";
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
const requestToken = () => ({
    type: TOKEN_REQUEST,
    checkingToken: true,
});

const tokenSuccess = (user) => ({
    type: TOKEN_SUCCESS,
    user: user,
});

const tokenFailure = () => ({
    type: TOKEN_FAILURE,
});

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
    TOKEN_REQUEST,
    TOKEN_SUCCESS,
    TOKEN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    USER_PERMISSIONS,
    requestToken,
    tokenSuccess,
    tokenFailure,
    requestLogin,
    loginSuccess,
    loginFailure,
    logout,
};
