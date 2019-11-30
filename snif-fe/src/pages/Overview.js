import React from "react";
import Layout from "../components/common/Layout";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import OverviewStyles from "../styles/overview/Overview.module.css";

const Overview = () => (
    <Layout navbar={true} sidebar={true}>
        <Container>

            <Row>
                <Col lg="12">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Balance
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Sales
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Purchases
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Stocks
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Orders
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Customers
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className={OverviewStyles.card}>
                        <CardHeader>
                        Financial
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Overview;
