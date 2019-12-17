import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import { Graph, colors } from "../components/common/utils/Graph";
import Axios from "axios";

const Overview = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [monthlySalesValues, setMonthlySalesValues] = useState([]);
    const [monthlyExpensesValues, setMonthlyExpensesValues] = useState([]);
    const [monthlyDiffValues, setMonthlyDiffValues] = useState([]);
    const [totalSales, setTotalSales] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/financial/overview", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setMonthlySalesValues(data.document.monthlySales);
            setMonthlyExpensesValues(data.document.monthlyExpenses);
            setMonthlyDiffValues(data.document.monthlyDiff);
            setTotalSales(data.document.totalSales);
            setTotalExpenses(data.document.totalExpenses);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const balanceData = {
        type: "line",
        labels: ["January", "February", "March", "April",
            "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: {
            "Sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: monthlySalesValues,
            },
            "Expenses": {
                backgroundColor: colors.red.background,
                borderColor: colors.red.border,
                values: monthlyExpensesValues,
            },
            "Sales - Expenses": {
                backgroundColor: colors.grey.background,
                borderColor: colors.grey.border,
                values: monthlyDiffValues,
            },
        },
    };

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="Balance">
                            <Graph data={balanceData} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="4">
                        <ContentCard loading={loading} header="Sales">
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
                        <ContentCard loading={loading} header="Purchases">
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
                        <ContentCard loading={loading} header="Stocks">
                            Value of inventory: 500.000 €
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="4">
                        <ContentCard loading={loading} header="Orders">
                            Value in pendent orders: 40.000 €
                        </ContentCard>
                    </Col>
                    <Col xs="4">
                        <ContentCard loading={loading} header="Customers">
                            Total Customers: 50.000
                        </ContentCard>
                    </Col>
                    <Col xs="4">
                        <ContentCard loading={loading} header="Financial">
                            <div>
                                <div>
                                    Total revenue: {totalSales} €
                                </div>
                                <div>
                                    Total expenses: {totalExpenses} €
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
