import React from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/common/Layout";
import ContentCard from "../components/common/utils/ContentCard";

const Sales = () => (
    <Layout navbar sidebar>
        <Container>
            <Row>
                <Col lg="12">
                    <ContentCard header="Monthly Sales">
                        Monthly Sales Graph
                    </ContentCard>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <Row>
                        <Col lg="6">
                            <ContentCard header="Growth">
                                Growth
                            </ContentCard>
                        </Col>
                        <Col lg="6">
                            <ContentCard header="Average Profit Margin">
                                Average Profit Margin
                            </ContentCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <ContentCard header="Cumulative Sales">
                                Cumulative Sales
                            </ContentCard>
                        </Col>
                    </Row>
                </Col>
                <Col lg="6">
                    <ContentCard header="Top Selling Products">
                        Top Selling Products
                    </ContentCard>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <ContentCard header="Sales">
                        Sales
                    </ContentCard>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Sales;
