import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Axios from "axios";

import ContentCard from "../common/utils/ContentCard"
import Indicator from "../../components/common/utils/Indicator";

const Debt = () => {
    const [loading, setLoading] = useState(true);
    const [purchaseDebt, setPurchaseDebt] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/purchases/debt", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setPurchaseDebt(data.debt);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Row className="mb-5">
            <Col xs="12">
                <ContentCard loading={loading} header="Purchase Debt">
                    <Indicator value={purchaseDebt} />
                </ContentCard>
            </Col>
        </Row>
    );
};

export default Debt;