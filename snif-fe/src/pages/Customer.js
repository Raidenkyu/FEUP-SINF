import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentTable from "../components/common/utils/ContentTable";
import Popup from "../components/common/utils/Popup";
import ContentCard from "../components/common/utils/ContentCard";
import CustomerStyles from "../styles/customer/Customer.module.css";
import { ReactComponent as Email } from "../assets/envelope-solid.svg";
import { ReactComponent as Contact } from "../assets/phone-solid.svg";
import { ReactComponent as Country } from "../assets/globe-solid.svg";

const Customer = ({ customerKey }) => {
    const [loading, setLoading] = useState(true);
    const [customerData, setCustomerData] = useState({});
    const [customerOrders, setCustomerOrders] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:9000/api/customers/${customerKey}`, {
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
            setCustomerOrders(data.orders);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [customerKey]);

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const toggle = () => {
        setModal(!modal);
        setModalData({});
    };
    const onRowClick = (data) => {
        setModal(!modal);
        setModalData(data);
    };
    const productHeaders = [
        { index: "id", value: "Order id" },
        { index: "product", value: "Product" },
        { index: "state", value: "State" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

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
                                        {customerData.contact}
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
                <Row>
                    <Col xs="12">
                        <ContentCard loading={loading} header="Orders">
                            <ContentTable headers={productHeaders} rows={customerOrders} onRowClick={onRowClick} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
            <Popup isOpen={modal} toggle={toggle} headers={productHeaders} data={modalData} />
        </Layout>
    );
};

Customer.propTypes = {
    customerKey: PropTypes.string,
};
export default Customer;
