import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import { Graph, colors } from "../components/common/utils/Graph";
import OrdersList from "../components/orders/OrdersList";
import Popup from "../components/common/utils/Popup";

import LayoutStyles from "../styles/common/layout.module.css";

const Orders = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [ordersChartLabels, setOrdersChartLabels] = useState([]);
    const [ordersChartCancelled, setOrdersChartCancelled] = useState([]);
    const [ordersChartFulfilled, setOrdersChartFulfilled] = useState([]);
    const [pendingValue, setPendingValue] = useState(0);
    const [pendingOrders, setPendingOrders] = useState(0);

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({ headers: [], data: {} });

    const onRowClick = (data) => {
        setModal(!modal);
        setModalData(data);
    };

    const toggle = () => {
        setModal(!modal);
        // setModalData({});
        setModalData({ headers: [], data: {} });
    };

    useEffect(() => {
        Axios.get("http://localhost:9000/api/orders", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setPendingValue(data.pendingValue.toFixed(2));
            setPendingOrders(data.pendingNum);

            const ordersLabels = [];
            setOrdersChartCancelled(Object.keys(data.ordersByTimestamp).map((key) => {
                ordersLabels.push(key);
                return data.ordersByTimestamp[key].canceled;
            }));
            setOrdersChartLabels(ordersLabels);

            setOrdersChartFulfilled(Object.keys(data.ordersByTimestamp).map((key) => data.ordersByTimestamp[key].fulfilled));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const ordersChart = {
        type: "bar",
        labels: ordersChartLabels,
        datasets: {
            "cancelled": {
                backgroundColor: colors.red.border,
                borderColor: colors.red.border,
                values: ordersChartCancelled,
            },
            "fulfilled orders": {
                backgroundColor: colors.lightGreen.border,
                borderColor: colors.lightGreen.border,
                values: ordersChartFulfilled,
            },
        },
    };

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Orders
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="9">
                        <ContentCard header="Orders chart" loading={loading}>
                            <Graph data={ordersChart}/>
                        </ContentCard>
                    </Col>
                    <Col xs="3" className="d-flex flex-column align-items-stretch flex-wrap w-100">
                        <Row className="flex-grow-1">
                            <Col xs="12">
                                <ContentCard header="Orders value (€)" loading={loading}>
                                    <Indicator value={pendingValue} />
                                </ContentCard>
                            </Col>
                        </Row>
                        <Row className="mt-5 flex-grow-1">
                            <Col xs="12">
                                <ContentCard header="Pending Orders" loading={loading}>
                                    <Indicator value={pendingOrders} />
                                </ContentCard>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <OrdersList onRowClick={onRowClick} />
                    </Col>
                </Row>
            </Container>
            <Popup isOpen={modal} toggle={toggle} headers={modalData.headers} data={modalData.data} />
        </Layout>
    );
};

Orders.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Orders;
