import { connect } from "react-redux";
import { navigate } from "@reach/router";
// import axios from "axios";

import { setUser } from "../../actions/UserActions"

import LoginForm from "./LoginForm";

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (email, password) => {
            // axios.post("http://localhost:9000/api/login", {
            //     logemail: email.value,
            //     logpassword: password.value,
            // }).then((response) => {
            //     console.log(response);
            //     redirectTo("/");
            // }).catch((error) => {
            //     console.log(error);
            //     setEmail({ ...email, error: true });
            //     setPassword({ ...password, error: true });
            // });
            dispatch(setUser({
                email: email,
                role: "admin",
            }))

            navigate("/overview");
        }
    }
}

const LoginFormContainer = connect(
    null,
    mapDispatchToProps,
)(LoginForm)

export default LoginFormContainer