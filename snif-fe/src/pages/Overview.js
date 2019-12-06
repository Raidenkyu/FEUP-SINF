import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import { Graph, colors } from "../components/common/utils/Graph";

const Overview = ({ path }) => {
    const balanceData = {
        type: "line",
        labels: ["January", "February", "March", "April",
            "May", "June", "July", "August", "September", "October", "November"],
        datasets: {
            "Revenue": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [70000, 260000, 65000, 20000, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            "Expenses": {
                backgroundColor: colors.red.background,
                borderColor: colors.red.border,
                values: [-100000, -90000, -105000, -5000, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            "Revenue - Expenses": {
                backgroundColor: colors.grey.background,
                borderColor: colors.grey.border,
                values: [-30000, 170000, -40000, 15000, 0, 0, 0, 0, 0, 0, 0, 0],
            },
        },
    };

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard header="Balance">
                            <Graph data={balanceData} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="4">
                        <ContentCard header="Sales">
                            <div>
                                <div>
                                Last month&apos;s sales volume: 300.000€
                                </div>
                                <div>
                                Last year&apos;s sales volume: 300.000€
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                    <Col xs="4">
                        <ContentCard header="Purchases">
                            <div>
                                <div>
                                Last month&apos;s purchase value: 50.000€
                                </div>
                                <div>
                                Last year&apos;s purchase value: 50.000€
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                    <Col xs="4">
                        <ContentCard header="Stocks">
                        Value of inventory: 500.000 €
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="4">
                        <ContentCard header="Orders">
                        Value in pendent orders: 40.000 €
                        </ContentCard>
                    </Col>
                    <Col xs="4">
                        <ContentCard header="Customers">
                        Total Customers: 50.000
                        </ContentCard>
                    </Col>
                    <Col xs="4">
                        <ContentCard header="Financial">
                            <div>
                                <div>
                                Total revenue: 500.000 €
                                </div>
                                <div>
                                Total expenses: 200.000 €
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Overview.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Overview;
