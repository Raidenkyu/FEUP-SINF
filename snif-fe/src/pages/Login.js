import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "react-image";
import { Link, redirectTo } from "@reach/router";
import axios from "axios";

import Layout from "../components/common/Layout";
import Input from "../components/common/inputs/Input";
import Button from "../components/common/inputs/Button";

import LoginStyles from "../styles/login/login.module.css";
import Logo from "../assets/logo.png";

const Login = () => {
    const [email, setEmail] = useState({
        value: "",
        error: false,
    });
    const [password, setPassword] = useState({
        value: "",
        error: false,
    });

    const handleChangeEmail = (event) => {
        if (event.target.value.match(/.+@.+\..+/)) {
            setEmail({
                value: event.target.value,
                error: false,
            });
        } else {
            setEmail({
                value: event.target.value,
                error: true,
            });
        }

        setPassword({ ...password, error: false });
    };

    const handleChangePassword = (event) => {
        setPassword({
            value: event.target.value,
            error: false,
        });
        if (email.value.match(/.+@.+\..+/)) {
            setEmail({ ...email, error: false });
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();

        axios.post("http://localhost:9000/api/login", {
            logemail: email.value,
            logpassword: password.value,
        }).then((response) => {
            console.log(response);
            redirectTo("/");
        }).catch((error) => {
            console.log(error);
            setEmail({ ...email, error: true });
            setPassword({ ...password, error: true });
        });
    };

    return (
        <Layout navbar={false} sidebar={false}>
            <div className={LoginStyles.loginPage}>
                <Container className={LoginStyles.loginContainer}>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }} className="d-flex justify-content-center">
                            <Link to="/">
                                <Img src={Logo} className={LoginStyles.logo} />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={{ size: 6, offset: 3 }}>
                            <Input
                                id="email"
                                label="E-mail:"
                                type="email"
                                placeholder="Insert your e-mail"
                                error={email.error}
                                onChange={handleChangeEmail}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={{ size: 6, offset: 3 }}>
                            <Input
                                id="password"
                                label="Password:"
                                type="password"
                                placeholder="Insert your password"
                                error={password.error}
                                onChange={handleChangePassword}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-4">
                        <Col md={{ size: 6, offset: 3 }} className="d-flex justify-content-center">
                            <Button
                                id="login"
                                label="Login"
                                onClick={handleLogin}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default Login;
