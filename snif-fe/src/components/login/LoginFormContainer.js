import { connect } from "react-redux";
import { navigate } from "@reach/router";
import axios from "axios";

import { requestLogin, loginSuccess, loginFailure } from "../../actions/AuthActions"

import LoginForm from "./LoginForm";

const mapStateToProps = state => {
    return {
        loggingIn: state.auth.loggingIn,
        error: state.auth.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (email, password) => {
            dispatch(requestLogin());

            axios.post("http://localhost:9000/api/login", {
                email: email,
                password: password,
            }).then((response) => {
                dispatch(loginSuccess({
                    email: response.data.email,
                    username: response.data.username,
                    role: response.data.role,
                }))

                navigate("/");
            }).catch((error) => {
                dispatch(loginFailure());
            });
        }
    }
}

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm)

export default LoginFormContainer