import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import ContentTable from "../components/common/utils/ContentTable";

const Customers = ({ path }) => {
    const customersHeaders = [
        { index: "name", value: "Name" },
        { index: "dateLastOrder", value: "Date of last order" },
        { index: "totalOrders", value: "Total orders" },
        { index: "valueOrders", value: "Value of orders (€)" },
    ];

    const customersRows = [
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
        { name: "Dunder Muffin", dateLastOrder: "27/10/2019", totalOrders: "33324", valueOrders: "50.000" },
    ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard header="Customers">
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
}

export default Customers;
