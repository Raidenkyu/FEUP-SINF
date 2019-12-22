import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import { Graph, colors } from "../components/common/utils/Graph";
import Indicator from "../components/common/utils/Indicator";
import ContentTable from "../components/common/utils/ContentTable";
import SalesList from "../components/sales/SalesList";

import LayoutStyles from "../styles/common/layout.module.css";
import Popup from "../components/common/utils/Popup";

const Sales = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [growth, setGrowth] = useState(0);
    const [margin, setMargin] = useState(0);
    const [monthlySalesLabels, setMonthlySalesLabels] = useState([]);
    const [monthlySalesValues, setMonthlySalesValues] = useState([]);
    const [cumulativeSalesValues, setCumulativeSalesValues] = useState([]);
    const [topSellingRows, setTopSellingRows] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({ headers: [], data: {} });
    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/sales", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setGrowth(data.growth);
            setMargin(data.margin.toFixed(2));

            const cumulativeSalesArr = [];
            const monthlySalesLabelsArr = [];
            let cumulativeCounter = 0;
            setMonthlySalesValues(Object.keys(data.salesByTimestamp).map((key) => {
                cumulativeCounter += data.salesByTimestamp[key].revenue;
                monthlySalesLabelsArr.push(key);
                cumulativeSalesArr.push(cumulativeCounter);
                return data.salesByTimestamp[key].revenue;
            }));
            setMonthlySalesLabels(monthlySalesLabelsArr);
            setCumulativeSalesValues(cumulativeSalesArr);

            setTopSellingRows(Object.keys(data.products).map((key) => ({
                name: key,
                units: data.products[key].units,
                revenue: new Intl.NumberFormat('en-UK').format(data.products[key].revenue),
            })));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const monthlySales = {
        type: "line",
        labels: monthlySalesLabels,
        datasets: {
            "sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: monthlySalesValues,
            },
        },
    };

    const cumulativeSales = {
        type: "line",
        labels: monthlySalesLabels,
        datasets: {
            "sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: cumulativeSalesValues,
            },
        },
    };

    const topSellingHeaders = [
        { index: "name", value: "Name" },
        { index: "units", value: "Units" },
        { index: "revenue", value: "Revenue (€)" },
    ];

    const clearModal = () => {
        setModal(false);
        setModalData({
            headers: [],
            data: {},
        });
    };

    const openModal = () => {
        setModal(true);
    };

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Sales
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="Monthly Sales">
                            <Graph data={monthlySales} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="6" className="d-flex flex-column align-items-stretch flex-wrap w-100">
                        <Row className="mb-5 flex-grow-1">
                            <Col xs="6">
                                <ContentCard loading={loading} header="Growth">
                                    <Indicator value={growth} />
                                </ContentCard>
                            </Col>
                            <Col xs="6">
                                <ContentCard loading={loading} header="Average Profit Margin">
                                    <Indicator value={margin} />
                                </ContentCard>
                            </Col>
                        </Row>
                        <Row className="flex-grow-1">
                            <Col xs="12">
                                <ContentCard loading={loading} header="Cumulative Sales">
                                    <Graph data={cumulativeSales} />
                                </ContentCard>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="6">
                        <ContentCard loading={loading} header="Top Selling Products">
                            <ContentTable headers={topSellingHeaders} rows={topSellingRows} onRowClick={openModal}/>
                        </ContentCard>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <SalesList setModalLoading={setModalLoading} onRowClick={openModal} setModalData={setModalData} />
                    </Col>
                </Row>
            </Container>
            <Popup loading={modalLoading} isOpen={modal} toggle={clearModal} headers={modalData.headers} data={modalData.data}/>
        </Layout>
    );
};

Sales.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Sales;
