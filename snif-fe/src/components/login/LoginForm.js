import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import Input from "../common/inputs/Input";
import Button from "../common/inputs/Button";

const LoginForm = ({ handleLogin }) => {
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

    return (
        <React.Fragment>
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
                        onClick={() => handleLogin(email, password)}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default LoginForm;