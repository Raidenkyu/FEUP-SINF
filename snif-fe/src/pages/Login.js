import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "react-image";
import { Link } from "@reach/router";

import Layout from "../components/common/Layout";
// import { requestAccessToken }  from "../lib/api/jasmin";

import LoginStyles from "../styles/login/login.module.css";
import Logo from "../assets/logo.png";

// requestAccessToken();

const Login = () => (
    <Layout navbar={false} sidebar={false}>
        <div className={LoginStyles.loginPage}>
            <Container className={LoginStyles.loginContainer}>
                <Row>
                    <Col xs={{ size: 6, offset: 3 }}>
                        <Link to="/">
                            <Img src={Logo} />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ size: 6, offset: 3 }}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={{ size: 6, offset: 3 }}>
                        ola
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ size: 6, offset: 3 }}>
                        ola
                    </Col>
                </Row>
            </Container>
        </div>
    </Layout>
);

export default Login;
