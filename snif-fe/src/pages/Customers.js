import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import ContentTable from "../components/common/utils/ContentTable";
import Axios from "axios";

const Customers = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [customersRows, setCustomersRows] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/customers", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            }
        }).then(({ data }) => {
            setCustomersRows(data.customers);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [])

    const customersHeaders = [
        { index: "name", value: "Name" },
        { index: "lastDate", value: "Date of last order" },
        { index: "totalOrders", value: "Total orders" },
        { index: "value", value: "Value of orders (€)" },
    ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="Customers">
                            <ContentTable headers={customersHeaders} rows={customersRows} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Customers.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Customers;
