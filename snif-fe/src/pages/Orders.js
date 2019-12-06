import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import Graph from "../components/common/utils/Graph";
import ContentTable from "../components/common/utils/ContentTable";

const Orders = ({ path }) => {
    const ordersChart = [];
    ordersChart["cancelled"] = [10000, 5000, 20000, 0, 1000, 2000, 1000, 4000, 10000, 7000, 6000, 1000];
    ordersChart["fulfilled orders"] = [40000, 50000, 45000, 40000, 30000, 25000, 20000, 17000, 20000, 25000, 35000, 38000];
    const ordersChartLabels = ["December 2018", "January 2019", "February 2019", "March 2019", "April 2019",
        "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019"];

    const productHeaders = [
        { index: "orderId", value: "Order id" },
        { index: "product", value: "Product" },
        { index: "state", value: "State" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    const productRows = [
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Delivered", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Processed", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Cancelled", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { orderId: "4FN2SNB3", product: "Mint Smell", state: "Pending", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row className="mb-5">
                    <Col xs="9">
                        <ContentCard header="Products">
                            <Graph type="bar" datas={ordersChart} labels={ordersChartLabels} />
                        </ContentCard>
                    </Col>
                    <Col xs="3" className="d-flex align-items-stretch flex-wrap w-100">
                        <Row className="flex-grow-1">
                            <Col xs="12">
                                <ContentCard header="Products">
                                    <Indicator value="30.000 €" />
                                </ContentCard>
                            </Col>
                        </Row>
                        <Row className="mt-5 flex-grow-1">
                            <Col xs="12">
                                <ContentCard header="Pending Orders">
                                    <Indicator value="15" />
                                </ContentCard>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard header="Turnover">
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
}

export default Orders;
