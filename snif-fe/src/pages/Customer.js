import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";
import Axios from "axios";

import Layout from "../components/common/layout/Layout";
import ContentTable from "../components/common/utils/ContentTable";
import Popup from "../components/common/utils/Popup";
import ContentCard from "../components/common/utils/ContentCard";

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
                <h1> {customerData.name}</h1>
                <h2> {customerData.email}</h2>
                <h2> {customerData.contact}</h2>
                <h2> {customerData.country}</h2>
                <ContentCard loading={loading} header="Cenas">
                    <ContentTable headers={productHeaders} rows={customerOrders} onRowClick={onRowClick} />
                </ContentCard>
            </Container>
            <Popup isOpen={modal} toggle={toggle} headers={productHeaders} data={modalData} />
        </Layout>
    );
};

Customer.propTypes = {
    customerKey: PropTypes.string,
};
export default Customer;
