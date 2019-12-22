import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import Financial from "../components/stocks/Financial";
import ProductsList from "../components/stocks/ProductsList";
import ResourcesList from "../components/stocks/ResourcesList";

import LayoutStyles from "../styles/common/layout.module.css";

const Stocks = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [productsStock, setProductsStock] = useState(0);
    const [resourcesStock, setResourcesStock] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/stocks", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setProductsStock(data.assetsInStock.products.toFixed(2));
            setResourcesStock(data.assetsInStock.resources.toFixed(2));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Stocks
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="6">
                        <ContentCard loading={loading} header="Products value in stock (€)">
                            <Indicator value={productsStock} />
                        </ContentCard>
                    </Col>
                    <Col xs="6">
                        <ContentCard loading={loading} header="Resources value in stock (€)">
                            <Indicator value={resourcesStock} />
                        </ContentCard>
                    </Col>
                </Row>
                <Financial />
                <Row className="mb-5">
                    <Col xs="6">
                        <ProductsList />
                    </Col>
                    <Col xs="6">
                        <ResourcesList />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Stocks.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Stocks;
