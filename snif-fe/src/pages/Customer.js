import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentTable from "../components/common/utils/ContentTable";
import Popup from "../components/common/utils/Popup";

const Customer = ({ name }) => {

    useEffect(() => {
        /* Axios.get("http://localhost:9000/api/customers", {
             headers: {
                 auth_token: localStorage.getItem("auth_token"),
             },
         }).then(({ data }) => {
             setCustomersRows(data.customers);
             setLoading(false);
         }).catch(() => {
             setLoading(false);
         });*/
    }, []);

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
    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "product", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    const purchasesRows = [
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { purchaseId: "4FN2SNB3", product: "Paper", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    ];

    return (
        <Layout navbar sidebar path="/">
            <Container>
                <h1>{name}</h1>
                <ContentTable headers={purchasesHeaders} rows={purchasesRows} onRowClick={onRowClick} />
            </Container>
            <Popup isOpen={modal} toggle={toggle} headers={purchasesHeaders} data={modalData} />
        </Layout>
    );
};

Customer.propTypes = {
    name: PropTypes.string,
};
export default Customer;
