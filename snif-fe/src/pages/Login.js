import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "react-image";
import { Link } from "@reach/router";

import Layout from "../components/common/layout/Layout";
import LoginFormContainer from "../components/login/LoginFormContainer";

import LoginStyles from "../styles/login/login.module.css";
import Logo from "../assets/logo.png";

const Login = () => (
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
                <LoginFormContainer />
            </Container>
        </div>
    </Layout>
);

export default Login;
