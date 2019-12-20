import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import ContentTable from "../components/common/utils/ContentTable";
import Financial from "../components/stocks/Financial";
import Popup from "../components/common/utils/Popup";

import LayoutStyles from "../styles/common/layout.module.css";

const Stocks = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [productRows, setProductRows] = useState([]);
    const [resourcesRows, setResourcesRows] = useState([]);
    const [productsStock, setProductsStock] = useState(0);
    const [resourcesStock, setResourcesStock] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({ headers: [], data: {} });

    const onRowClick = (headers, row) => {
        setModal(!modal);
        setModalData({
            headers: headers,
            data: row,
        });
    };

    const toggle = () => {
        setModal(!modal);
        setModalData({ headers: [], data: {} });
    };

    useEffect(() => {
        Axios.get("http://localhost:9000/api/stocks", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setProductRows(data.products);
            setResourcesRows(data.resources);
            setProductsStock(data.assetsInStock.products.toFixed(2));
            setResourcesStock(data.assetsInStock.resources.toFixed(2));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const productHeaders = [
        { index: "name", value: "Name" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
    ];

    const resourcesHeaders = [
        { index: "name", value: "Name" },
        { index: "quantity", value: "Quantity (kg)" },
        { index: "value", value: "Value (€/kg)" },
    ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Stocks
                    </Col>
                </Row>
                <Financial />
                <Row>
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
                <Row className="mb-5">
                    <Col xs="6">
                        <ContentCard loading={loading} header="Products">
                            <ContentTable headers={productHeaders} rows={productRows} onRowClick={onRowClick} />
                        </ContentCard>
                    </Col>
                    <Col xs="6">
                        <ContentCard loading={loading} header="Resources">
                            <ContentTable headers={resourcesHeaders} rows={resourcesRows} onRowClick={onRowClick} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
            <Popup isOpen={modal} toggle={toggle} headers={modalData.headers} data={modalData.data}/>
        </Layout>
    );
};

Stocks.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Stocks;
