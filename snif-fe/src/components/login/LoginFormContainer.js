import { connect } from "react-redux";
import { navigate } from "@reach/router";
import axios from "axios";

import { setUser } from "../../actions/UserActions"

import LoginForm from "./LoginForm";

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (email, password) => {
            axios.post("http://localhost:9000/api/login", {
                email: email.value,
                password: password.value,
            }).then((response) => {
                console.log(response);

                dispatch(setUser({
                    email: response.data.email,
                    username: response.data.username,
                    role: response.data.role,
                }))

                navigate("/");
            }).catch((error) => {
                console.log(error);
                // setEmail({ ...email, error: true });
                // setPassword({ ...password, error: true });
            });
        }
    }
}

const LoginFormContainer = connect(
    null,
    mapDispatchToProps,
)(LoginForm)

export default LoginFormContainer