import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import PurchasesList from "../components/resource/PurchasesList";

import ResourceStyles from "../styles/drilldown/Drilldown.module.css";

const Resource = ({ resourceKey }) => {
    const [loading, setLoading] = useState(true);
    const [resource, setResource] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:9000/api/stocks/${resourceKey}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setResource(data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [resourceKey]);

    return (
        <Layout navbar sidebar path="/">
            <Container>
                <Row>
                    <Col xs="12" className={`${resource.error ? ResourceStyles.pageHeaderError : ResourceStyles.pageHeader} mb-5 h1`}>
                        {resource.name}
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard loading={loading} header="General Information">
                            <div className="w-100">
                                <div className="my-3">
                                    <span className={resource.error ? ResourceStyles.headerError : ResourceStyles.header}>
                                        Quantity:
                                    </span>
                                    <span className={ResourceStyles.text}>
                                        {resource.quantity}
                                    </span>
                                </div>
                                <div className="my-3">
                                    <span className={ResourceStyles.header}>
                                        Value (€):
                                    </span>
                                    <span className={ResourceStyles.text}>
                                        {resource.value}
                                    </span>
                                </div>
                            </div>
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="12">
                        <PurchasesList resourceKey={resourceKey} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Resource.propTypes = {
    resourceKey: PropTypes.string,
};

export default Resource;
