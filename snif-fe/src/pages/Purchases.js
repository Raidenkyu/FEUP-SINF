import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import Monthly from "../components/purchases/Monthly";
import CumulativeMonthly from "../components/purchases/CumulativeMonthly";
import Debt from "../components/purchases/Debt";
import TopSuppliers from "../components/purchases/TopSuppliers";
import PurchasesList from "../components/purchases/PurchasesList";

const Purchases = ({ path }) => (
    <Layout navbar sidebar path={path}>
        <Container>
            <Monthly />
            <Row className="mb-5">
                <Col xs="6">
                    <Debt />
                    <CumulativeMonthly />
                </Col>
                <Col xs="6">
                    <TopSuppliers />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <PurchasesList />
                </Col>
            </Row>
        </Container>
    </Layout>
);

Purchases.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Purchases;
