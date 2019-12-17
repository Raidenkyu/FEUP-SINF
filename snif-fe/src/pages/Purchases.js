import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import { Graph, colors } from "../components/common/utils/Graph";
import Indicator from "../components/common/utils/Indicator";
import ContentTable from "../components/common/utils/ContentTable";
import Monthly from "../components/purchases/Monthly";

const Purchases = ({ path }) => {
    const monthlyPurchases = {
        type: "line",
        labels: ["December 2018", "January 2019", "February 2019", "March 2019", "April 2019",
            "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019"],
        datasets: {
            "sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [40000, 50000, 45000, 40000, 30000, 25000, 20000, 17000, 20000, 25000, 35000],
            },
        },
    };

    const cumulativePurchases = {
        type: "line",
        labels: [2008, 2010, 2012, 2014, 2016, 2018],
        datasets: {
            "sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [0, 100000, 1000000, 2000000, 2500000, 4200000],
            },
        },
    };

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
                        <Row className="mb-5">
                            <Col xs="12">
                                <ContentCard header="Purchase Debt">
                                    <Indicator value={"50.000 €"} />
                                </ContentCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <ContentCard header="Cumulative Purchases">
                                    <Graph data={cumulativePurchases}/>
                                </ContentCard>
                            </Col>
                        </Row>
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
