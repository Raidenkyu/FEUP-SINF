import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Axios from "axios";

import ContentCard from "../common/utils/ContentCard";
import Indicator from "../common/utils/Indicator";

const Financial = () => {
    const [loading, setLoading] = useState(true);
    const [turnover, setTurnover] = useState(0);
    const [avgInvPeriod, setAvgInvPeriod] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/stocks/financial", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setTurnover(data.document.turnover.toFixed(2));
            setAvgInvPeriod(data.document.avgInvPeriod.toFixed(2));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Row className="mb-5">
            <Col xs="6">
                <ContentCard loading={loading} header="Turnover">
                    <Indicator value={turnover} />
                </ContentCard>
            </Col>
            <Col xs="6">
                <ContentCard loading={loading} header="Average Inventory Period">
                    <Indicator value={avgInvPeriod} />
                </ContentCard>
            </Col>
        </Row>
    );
};

export default Financial;