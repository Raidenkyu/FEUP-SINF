import React, { useState } from "react";
import { Row, Col, Spinner } from "reactstrap";

import Input from "../common/inputs/Input";
import Button from "../common/inputs/Button";

const LoginForm = ({ loggingIn, error, handleLogin }) => {
    const [email, setEmail] = useState({
        value: "",
        error: false,
    });

    const [password, setPassword] = useState("");

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
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        if (email.value.match(/.+@.+\..+/)) {
            setEmail({ ...email, error: false });
        }
    };

    return (
        <React.Fragment>
            <Row className="mt-4">
                <Col md={{ size: 6, offset: 3 }}>
                    <Input
                        id="email"
                        label="E-mail:"
                        type="email"
                        placeholder="Insert your e-mail"
                        error={error || email.error}
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
                        error={error || false}
                        onChange={handleChangePassword}
                    />
                </Col>
            </Row>
            <Row className="mt-5 mb-4">
                <Col md={{ size: 6, offset: 3 }} className="d-flex justify-content-center">
                    <Button
                        id="login"
                        label={loggingIn ? <Spinner color="success" /> : "Login"}
                        onClick={() => handleLogin(email.value, password)}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default LoginForm;