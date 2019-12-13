import Axios from "axios";
import { connect } from "react-redux";
// import Cookie from "js-cookie";

import { requestToken, tokenSuccess, tokenFailure } from "./actions/AuthActions";
import { AppRouter } from "./AppRouter";

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            dispatch(requestToken());

            Axios.get("http://localhost:9000/api/users/token", {
                headers: {
                    "auth_token": localStorage.getItem("auth_token"),
                }
            }).then((response) => {
                dispatch(tokenSuccess(response.data.user));
            }).catch(() => {
                localStorage.removeItem("auth_token");
                dispatch(tokenFailure());
            });
        }
    };
};

const AppContainer = connect(
    null,
    mapDispatchToProps,
)(AppRouter);

export default AppContainer;