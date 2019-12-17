import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import ContentTable from "../components/common/utils/ContentTable";
import Monthly from "../components/purchases/Monthly";
import CumulativeMonthly from "../components/purchases/CumulativeMonthly";
import Debt from "../components/purchases/Debt";

const Purchases = ({ path }) => {
    const topSuppliersHeaders = [
        { index: "name", value: "Name" },
        { index: "quantity", value: "Quantity (kg)" },
        { index: "priceRatio", value: "Price ratio (€/kg)" },
    ];

    const topSuppliersRows = [
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
        { name: "Paper", quantity: "50.000", priceRatio: "1" },
    ];

    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "product", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    const purchasesRows = [
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Monthly />
                <Row className="mb-5">
                    <Col xs="6">
                        <Debt />
                        <CumulativeMonthly />
                    </Col>
                    <Col xs="6">
                        <ContentCard header="Top Suppliers">
                            <ContentTable headers={topSuppliersHeaders} rows={topSuppliersRows} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <ContentCard header="Purchases">
                            <ContentTable headers={purchasesHeaders} rows={purchasesRows} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Purchases.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Purchases;
