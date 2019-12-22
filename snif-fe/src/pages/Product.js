import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
// import PurchasesList from "../components/purchases/PurchasesList";
// import Popup from "../components/common/utils/Popup";

import ProductStyles from "../styles/drilldown/Drilldown.module.css";

const Product = ({ productKey }) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    // const [modal, setModal] = useState(false);
    // const [modalData, setModalData] = useState({});
    // const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:9000/api/stocks/${productKey}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setProduct(data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [productKey]);

    // const openModal = () => {
    //     setModal(true);
    // };

    // const clearModal = () => {
    //     setModal(false);
    //     setModalData({
    //         headers: [],
    //         data: {},
    //     });
    // };

    return (
        <Layout navbar sidebar path="/">
            <Container>
                <Row>
                    <Col xs="12" className={`${product.error ? ProductStyles.pageHeaderError : ProductStyles.pageHeader} mb-5 h1`}>
                        {product.name}
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="General Information">
                            <div className="w-100">
                                <div className="my-3">
                                    <span className={product.error ? ProductStyles.headerError : ProductStyles.header}>
                                        Quantity:
                                    </span>
                                    <span className={ProductStyles.text}>
                                        {product.quantity}
                                    </span>
                                </div>
                                <div className="my-3">
                                    <span className={ProductStyles.header}>
                                        Value:
                                    </span>
                                    <span className={ProductStyles.text}>
                                        {product.value}
                                    </span>
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        {/* <SalesList
                            productKey={productKey}
                            setModalLoading={setModalLoading}
                            onRowClick={openModal}
                            setModalData={setModalData}
                        /> */}
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        {/* <OrdersList
                            productKey={productKey}
                            setModalLoading={setModalLoading}
                            onRowClick={openModal}
                            setModalData={setModalData}
                        /> */}
                    </Col>
                </Row>
            </Container>
            {/* <Popup loading={modalLoading} isOpen={modal} toggle={clearModal} headers={modalData.headers} data={modalData.data} /> */}
        </Layout>
    );
};

Product.propTypes = {
    productKey: PropTypes.string.isRequired,
};

export default Product;
