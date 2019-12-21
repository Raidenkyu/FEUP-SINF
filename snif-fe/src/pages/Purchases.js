import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

import Layout from "../components/common/layout/Layout";
import Monthly from "../components/purchases/Monthly";
import CumulativeMonthly from "../components/purchases/CumulativeMonthly";
import Debt from "../components/purchases/Debt";
import TopSuppliers from "../components/purchases/TopSuppliers";
import PurchasesList from "../components/purchases/PurchasesList";

import LayoutStyles from "../styles/common/layout.module.css";
import Popup from "../components/common/utils/Popup";

const Purchases = ({ path }) => {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({ headers: [], data: {} });
    const [modalLoading, setModalLoading] = useState(false);

    const clearModal = () => {
        setModal(false);
        setModalData({
            headers: [],
            data: {},
        });
    };

    const openModal = () => {
        setModal(true);
    };

    const onSuppliersClick = (headers, row) => {
        navigate(`/suppliers/${row.supplierKey}`);
    };

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Purchases
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <Monthly />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="6" className="d-flex flex-column align-items-stretch flex-wrap w-100">
                        <Debt />
                        <CumulativeMonthly />
                    </Col>
                    <Col xs="6">
                        <TopSuppliers onRowClick={onSuppliersClick} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <PurchasesList setModalLoading={setModalLoading} onRowClick={openModal} setModalData={setModalData} />
                    </Col>
                </Row>
            </Container>
            <Popup loading={modalLoading} isOpen={modal} toggle={clearModal} headers={modalData.headers} data={modalData.data} />
        </Layout>
    );
};

Purchases.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Purchases;
