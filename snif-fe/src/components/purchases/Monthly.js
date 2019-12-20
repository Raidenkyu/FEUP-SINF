import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Axios from "axios";

import ContentCard from "../common/utils/ContentCard"
import { Graph, colors } from "../../components/common/utils/Graph";

const Monthly = () => {
    const [loading, setLoading] = useState(true);
    const [monthlyValues, setMonthlyValues] = useState(0);
    const [monthlyLabels , setMonthlyPurchasesLabels] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/purchases/monthly", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            const monthlyPurchasesLabelsArr = [];
            setMonthlyValues(Object.keys(data.purchasesByTimestamp).map((key) => {
                monthlyPurchasesLabelsArr.push(key);
                return data.purchasesByTimestamp[key];
            }));
            setMonthlyPurchasesLabels(monthlyPurchasesLabelsArr);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    const monthlyPurchases = {
        type: "line",
        labels: monthlyLabels,
        datasets: {
            "Purchases": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: monthlyValues,
            },
        },
    };

    return (
        <ContentCard loading={loading} header="Monthly Purchases">
            <Graph data={monthlyPurchases} />
        </ContentCard>
    );
};

export default Monthly;