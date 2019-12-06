import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";

const Overview = ({ path }) => (
    <Layout navbar sidebar path={path}>
        <Container>
            <Row>
                <Col lg="12">
                    <ContentCard header="Balance">
                        Estou?
                    </ContentCard>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <ContentCard header="Sales">
                        Camila?
                    </ContentCard>
                </Col>
                <Col lg="4">
                    <ContentCard header="Purchases">
                        Chupa
                    </ContentCard>
                </Col>
                <Col lg="4">
                    <ContentCard header="Stocks">
                        me
                    </ContentCard>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <ContentCard header="Orders">
                        a
                    </ContentCard>
                </Col>
                <Col lg="4">
                    <ContentCard header="Customers">
                        pi
                    </ContentCard>
                </Col>
                <Col lg="4">
                    <ContentCard header="Financial">
                        la
                    </ContentCard>
                </Col>
            </Row>
        </Container>
    </Layout>
);

Overview.propTypes = {
    path: PropTypes.string.isRequired,
}

export default Overview;
