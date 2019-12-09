/**
 * Action constants
 */
const UPDATE_PATH = "UPDATE_PATH";

/**
 * Action creators
 */
const updatePath = (path) => ({
    type: UPDATE_PATH,
    path: path,
});

export {
    UPDATE_PATH,
    updatePath,
};
