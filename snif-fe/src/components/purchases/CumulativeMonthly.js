import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Axios from "axios";

import ContentCard from "../common/utils/ContentCard"
import { Graph, colors } from "../../components/common/utils/Graph";

const CumulativeMonthly = () => {
    const [loading, setLoading] = useState(true);
    const [monthlyLabels , setMonthlyPurchasesLabels] = useState(0);
    const [cumulativeMonthlyValues, setMonthlyPurchasesCumulative] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/purchases/monthly", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            
            const monthlyPurchasesLabelsArr = [];
            const cumulativeMonthlyValues = [];
            let lastMonth = 0;
            (Object.keys(data.purchasesByTimestamp).map((key) => {
                monthlyPurchasesLabelsArr.push(key);
                cumulativeMonthlyValues.push(lastMonth + data.purchasesByTimestamp[key]);
                lastMonth += data.purchasesByTimestamp[key];
                return data.purchasesByTimestamp[key];
            }));
            setMonthlyPurchasesLabels(monthlyPurchasesLabelsArr);
            setMonthlyPurchasesCumulative(cumulativeMonthlyValues);      
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const cumulativePurchases = {
        type: "line",
        labels: monthlyLabels,
        datasets: {
            "Purchases": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: cumulativeMonthlyValues,
            },
        },
    };

    return (
        <Row className="flex-grow-1">
            <Col xs="12">
                <ContentCard loading={loading} header="Cumulative Purchases">
                    <Graph data={cumulativePurchases}/>
                </ContentCard>
            </Col>
        </Row>
    );
};

export default CumulativeMonthly;