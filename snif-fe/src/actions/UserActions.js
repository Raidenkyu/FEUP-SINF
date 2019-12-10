/**
 * Action constants
 */
const SET_USER = "SET_USER";
const UNSET_USER = "UNSET_USER";

/**
 * Other constants
 */
const USER_PERMISSIONS = {
    admin: ["/overview", "/sales", "/purchases", "/stocks", "/orders", "/customers", "/financial"],
};

/**
 * Action creators
 */
const setUser = (user) => ({
    type: SET_USER,
    user: user,
});

const unsetUser = () => ({
    type: UNSET_USER,
});

export {
    SET_USER,
    UNSET_USER,
    USER_PERMISSIONS,
    setUser,
    unsetUser,
};
