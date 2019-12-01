import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "react-image";
import { Link } from "@reach/router";
import axios from "axios";

import Layout from "../components/common/Layout";
import Input from "../components/common/inputs/Input";
import Button from "../components/common/inputs/Button";

import LoginStyles from "../styles/login/login.module.css";
import Logo from "../assets/logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const user = {
            logemail: email,
            logpassword: password,
        };

        axios.post("http://localhost:9000/api/login", { body: user }).then((res) => {
            console.log(res);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
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
                                type="text"
                                placeholder="Insert your e-mail"
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
