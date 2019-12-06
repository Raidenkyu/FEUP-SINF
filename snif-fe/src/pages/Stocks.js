import React from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/common/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import ContentTable from "../components/common/utils/ContentTable";

const Sales = () => {
    const productHeaders = [
        { index: "name", value: "Name" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "VAlue (€)" },
    ];

    const productRows = [
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
        { name: "Mint Smell", quantity: "50.000", value: "40.000" },
    ];


    const resourcesHeaders = [
        { index: "name", value: "Name" },
        { index: "quantity", value: "Quantity (kg)" },
        { index: "value", value: "VAlue (€/kg)" },
    ];

    const resourcesRows = [
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
        { name: "Paper", quantity: "50.000", value: "1" },
    ];

    return (
        <Layout navbar sidebar>
            <Container>
                <Row className="mb-5">
                    <Col xs="6">
                        <ContentCard header="Products">
                            <ContentTable headers={productHeaders} rows={productRows} />
                        </ContentCard>
                    </Col>
                    <Col xs="6">
                        <ContentCard header="Resources">
                            <ContentTable headers={resourcesHeaders} rows={resourcesRows} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="3">
                        <ContentCard header="Turnover">
                            <Indicator value={7.3} />
                        </ContentCard>
                    </Col>
                    <Col xs="3">
                        <ContentCard header="Average Inventory Period">
                            <Indicator value="3 months" />
                        </ContentCard>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <ContentCard header="Assets in stocks">
                            <Indicator value="200.000 €" />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Sales;
