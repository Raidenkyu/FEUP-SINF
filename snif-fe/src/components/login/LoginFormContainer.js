import { connect } from "react-redux";
import { navigate } from "@reach/router";
import axios from "axios";
// import Cookies from 'js-cookie';

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
                }));

                // Cookies.set('auth_token', response.data.auth_token);
                localStorage.setItem("auth_token", response.data.auth_token);

                navigate("/");
            }).catch(() => {
                dispatch(loginFailure(true));
            });
        }
    }
}

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm)

export default LoginFormContainer