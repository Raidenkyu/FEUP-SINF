import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import PaginatedTable from "../components/common/utils/PaginatedTable";

import LayoutStyles from "../styles/common/layout.module.css";

const Customers = ({ path }) => {
    const [loading, setLoading] = useState(true);
    const [customersRows, setCustomersRows] = useState([]);

    const onRowClick = (data) => {
        // console.log(data);
        navigate(`/customers/${data.customerKey}`);
    };

    useEffect(() => {
        Axios.get("http://localhost:9000/api/customers", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setCustomersRows(data.customers);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const customersHeaders = [
        { index: "name", value: "Name" },
        { index: "lastDate", value: "Date of last order" },
        { index: "totalOrders", value: "Total orders" },
        { index: "value", value: "Value of orders (€)" },
    ];

    return (
        <Layout navbar sidebar path={path}>
            <Container>
                <Row>
                    <Col xs="12" className={`${LayoutStyles.pageHeader} mb-5 h1`}>
                        Customers
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <PaginatedTable
                            endpoint="/api/customers"
                            header="Customers List"
                            tableHeaders={customersHeaders}
                            pageSize={15}
                            list="customers"
                        />
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
