import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import Popup from "../components/common/utils/Popup";
import ContentCard from "../components/common/utils/ContentCard";
import CustomerStyles from "../styles/customer/Customer.module.css";
import { ReactComponent as Contact } from "../assets/phone-solid.svg";
import { ReactComponent as Country } from "../assets/globe-solid.svg";
import PurchasesList from "../components/supplier/PurchasesList";

const Supplier = ({ supplierKey }) => {
    const [loading, setLoading] = useState(true);
    const [supplierData, setSupplierData] = useState({});
    const [modalLoading, setModalLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({ headers: [], data: {} });

    useEffect(() => {
        Axios.get(`http://localhost:9000/api/purchases/suppliers/${supplierKey}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setSupplierData({
                name: data.name,
                email: data.email,
                contact: data.telephone,
                country: data.country,
            });

            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [supplierKey]);

    const openModal = () => {
        setModal(true);
    };

    const clearModal = () => {
        setModal(!modal);
        setModalData({
            headers: [],
            data: {},
        });
    };

    return (
        <Layout navbar sidebar path="/">
            <Container>
                <Row>
                    <Col xs="12" className={`${CustomerStyles.pageHeader} mb-5 h1`}>
                        {supplierData.name}
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="General Information">
                            <div className="w-100">
                                <div className="my-3">
                                    <Contact className={CustomerStyles.icon} />
                                    <span className={CustomerStyles.text}>
                                        {supplierData.contact}
                                    </span>
                                </div>
                                <div className="my-3">
                                    <Country className={CustomerStyles.icon} />
                                    <span className={CustomerStyles.text}>
                                        {supplierData.country}
                                    </span>
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <PurchasesList
                            setModalLoading={setModalLoading}
                            supplierKey={supplierKey}
                            onRowClick={openModal}
                            setModalData={setModalData} />
                    </Col>
                </Row>
            </Container>
            <Popup
                loading={modalLoading}
                isOpen={modal}
                toggle={clearModal}
                headers={modalData.headers}
                data={modalData.data} />
        </Layout>
    );
};

Supplier.propTypes = {
    supplierKey: PropTypes.string,
};
export default Supplier;
