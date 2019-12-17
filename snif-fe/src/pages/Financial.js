import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";
import { PropTypes } from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import { Graph, colors } from "../components/common/utils/Graph";

const Financial = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [netProfitValues, setNetProfitValues] = useState([]);
    const [grossProfitValues, setGrossProfitValues] = useState([]);
    const [equityReturnValues, setEquityReturnValues] = useState([]);
    const [assetsReturnValues, setAssetsReturnValues] = useState([]);
    const [salesReturnValues, setSalesReturnValues] = useState([]);
    const [ebitda, setEbitda] = useState(0);
    const [ebit, setEbit] = useState(0);
    const [avgColPeriod, setAvgColPeriod] = useState(0);
    const [avgPayPeriod, setAvgPayPeriod] = useState(0);
    const [cashRatio, setCashRatio] = useState(0);
    const [acidRatio, setAcidRatio] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/financial", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setNetProfitValues(data.document.grossNetMargin.net);
            setGrossProfitValues(data.document.grossNetMargin.gross);
            setEquityReturnValues(data.document.returnOn.equity);
            setAssetsReturnValues(data.document.returnOn.assets);
            setSalesReturnValues(data.document.returnOn.sales);
            setEbitda(new Intl.NumberFormat('de-DE').format(data.document.ebitda));
            setEbit(new Intl.NumberFormat('de-DE').format(data.document.ebit));
            setAvgColPeriod(data.document.avgColPeriod.toFixed(2));
            setAvgPayPeriod(data.document.avgPayPeriod.toFixed(2));
            setCashRatio(data.document.cashRatio.toFixed(2));
            setAcidRatio(data.document.acidRatio.toFixed(2));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const grossNetProfit = {
        type: "line",
        labels: ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06",
            "2019-07", "2019-08", "2019-09", "2019-10", "2019-11", "2019-12"],
        datasets: {
            "Net": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: netProfitValues,
            },
            "Gross": {
                backgroundColor: colors.middleGreen.background,
                borderColor: colors.middleGreen.border,
                values: grossProfitValues,
            },
        },
    };

    const returnSales = {
        type: "line",
        labels: ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06",
            "2019-07", "2019-08", "2019-09", "2019-10", "2019-11", "2019-12"],
        datasets: {
            "Equity": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: equityReturnValues,
            },
            "Assets": {
                backgroundColor: colors.middleGreen.background,
                borderColor: colors.middleGreen.border,
                values: assetsReturnValues,
            },
            "Sales": {
                backgroundColor: colors.darkGreen.background,
                borderColor: colors.darkGreen.border,
                values: salesReturnValues,
            },
        },
    };

    return (
        <Layout path={path} navbar sidebar>
            <Container>
                <Row className="mb-5">
                    <Col xs="6">
                        <ContentCard loading={loading} header="Gross and Net profit margin (€)">
                            <Graph data={grossNetProfit} />
                        </ContentCard>
                    </Col>
                    <Col xs="6">
                        <ContentCard loading={loading} header="Return on sales, assets and equity (%)">
                            <Graph data={returnSales} />
                        </ContentCard>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg="3" xs="12">
                        <ContentCard loading={loading} header="EBITDA (€)">
                            <Indicator value={ebitda} />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard loading={loading} header="EBIT (€)">
                            <Indicator value={ebit} />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard loading={loading} header="Average collection period (days)">
                            <Indicator value={avgColPeriod} />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard loading={loading} header="Average payment period (days)">
                            <Indicator value={avgPayPeriod} />
                        </ContentCard>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg="3" xs="12">
                        <ContentCard loading={loading} header="Cash ratio">
                            <Indicator value={cashRatio} />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard loading={loading} header="Acid ratio">
                            <Indicator value={acidRatio} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Financial.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Financial;
