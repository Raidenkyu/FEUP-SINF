import Axios from "axios";
import { connect } from "react-redux";
// import Cookie from "js-cookie";

import { requestLogin, loginSuccess, loginFailure } from "./actions/AuthActions";
import { AppRouter } from "./AppRouter";

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            dispatch(requestLogin());

            Axios.get("http://localhost:9000/api/users/token", {
                headers: {
                    "auth_token": localStorage.getItem("auth_token"),
                }
            }).then((response) => {
                console.log(response.data.user);
                
                dispatch(loginSuccess(response.data.user));
            }).catch(error => {
                console.log(error.toJSON());
                
                localStorage.removeItem("auth_token");
                dispatch(loginFailure(false));
            });
        }
    };
};

const AppContainer = connect(
    null,
    mapDispatchToProps,
)(AppRouter);

export default AppContainer;