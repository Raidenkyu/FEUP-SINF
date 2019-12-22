import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import { Graph, colors } from "../components/common/utils/Graph";
import SalesCard from "../components/overview/SalesCard";
import PurchasesCard from "../components/overview/PurchasesCard";
import StocksCard from "../components/overview/StocksCard";

import LayoutStyles from "../styles/common/layout.module.css";

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
            setTotalSales(new Intl.NumberFormat('de-DE').format(data.document.totalSales));
            setTotalExpenses(new Intl.NumberFormat('de-DE').format(data.document.totalExpenses));
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
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Overview
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="Balance">
                            <Graph data={balanceData} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="6">
                        <SalesCard />
                    </Col>
                    <Col xs="6">
                        <PurchasesCard />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="6">
                        <StocksCard />
                    </Col>
                    <Col xs="6">
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
