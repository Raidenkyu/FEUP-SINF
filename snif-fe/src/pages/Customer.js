import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import Popup from "../components/common/utils/Popup";
import ContentCard from "../components/common/utils/ContentCard";
import SalesList from "../components/customer/SalesList";
import OrdersList from "../components/customer/OrdersList";

import CustomerStyles from "../styles/drilldown/Drilldown.module.css";
import { ReactComponent as Email } from "../assets/envelope-solid.svg";
import { ReactComponent as Contact } from "../assets/phone-solid.svg";
import { ReactComponent as Country } from "../assets/globe-solid.svg";

const Customer = ({ customerKey }) => {
    const [loading, setLoading] = useState(true);
    const [customerData, setCustomerData] = useState({});
    const [modalLoading, setModalLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({ headers: [], data: {} });

    useEffect(() => {
        Axios.get(`http://localhost:9000/api/customers/info/${customerKey}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setCustomerData({
                name: data.name,
                email: data.email,
                contact: data.telefone,
                country: data.country,
            });
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [customerKey]);

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
                        {customerData.name}
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="General Information">
                            <div className="w-100">
                                <div className="my-3">
                                    <Email className={CustomerStyles.icon} />
                                    <span className={CustomerStyles.text}>
                                        {customerData.email}
                                    </span>
                                </div>
                                <div className="my-3">
                                    <Contact className={CustomerStyles.icon} />
                                    <span className={CustomerStyles.text}>
                                        {customerData.telephone}
                                    </span>
                                </div>
                                <div className="my-3">
                                    <Country className={CustomerStyles.icon} />
                                    <span className={CustomerStyles.text}>
                                        {customerData.country}
                                    </span>
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <OrdersList
                            setModalLoading={setModalLoading}
                            customerKey={customerKey}
                            onRowClick={openModal}
                            setModalData={setModalData} />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <SalesList
                            setModalLoading={setModalLoading}
                            customerKey={customerKey}
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

Customer.propTypes = {
    customerKey: PropTypes.string,
};
export default Customer;
