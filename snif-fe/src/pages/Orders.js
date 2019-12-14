import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import { Graph, colors } from "../components/common/utils/Graph";
import ContentTable from "../components/common/utils/ContentTable";

const Orders = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [ordersChartCancelled, setOrdersChartCancelled] = useState([]);
    const [ordersChartFulfilled, setOrdersChartFulfilled] = useState([]);
    const [productRows, setProductRows] = useState([]);
    const [pendingValue, setPendingValue] = useState(0);
    const [pendingOrders, setPendingOrders] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/orders", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            }
        }).then(({ data }) => {
            setPendingValue(data.pendingValue);
            setPendingOrders(data.pendingNum);
            setOrdersChartCancelled(Object.keys(data.ordersByTimestamp).map(key => data.ordersByTimestamp[key].canceled));
            setOrdersChartFulfilled(Object.keys(data.ordersByTimestamp).map(key => data.ordersByTimestamp[key].fulfilled));
            setProductRows(data.ordersProducts);
            console.log(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    const ordersChart = {
        type: "bar",
        labels: ["December 2018", "January 2019", "February 2019", "March 2019", "April 2019",
            "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019"],
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
    console.log(ordersChart);
    

    const productHeaders = [
        { index: "orderId", value: "Order id" },
        { index: "product", value: "Product" },
        { index: "state", value: "State" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    // const productRows = [
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Delivered", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Processed", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Cancelled", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    //     { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    // ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row className="mb-5">
                    <Col xs="9">
                        <ContentCard header="Products" loading={loading}>
                            <Graph data={ordersChart}/>
                        </ContentCard>
                    </Col>
                    <Col xs="3" className="d-flex align-items-stretch flex-wrap w-100">
                        <Row className="flex-grow-1">
                            <Col xs="12">
                                <ContentCard header="Order's value (€)" loading={loading}>
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
                        <ContentCard header="Orders List" loading={loading}>
                            <ContentTable headers={productHeaders} rows={productRows} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Orders.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Orders;
