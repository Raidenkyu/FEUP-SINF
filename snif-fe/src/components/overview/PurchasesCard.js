import React, { useState, useEffect } from "react";
import Axios from "axios";
import ContentCard from "../common/utils/ContentCard";

const PurchasesCard = () => {
    const [loading, setLoading] = useState(true);
    const [purchasesLast, setPurchasesLast] = useState(0);
    const [purchases, setPurchases] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/overview/purchases", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setPurchasesLast(new Intl.NumberFormat('en-UK').format(data.purchasesByTimestamp[Object.keys(data.purchasesByTimestamp)[0]]));
            setPurchases(new Intl.NumberFormat('en-UK').format(data.purchasesByTimestamp[Object.keys(data.purchasesByTimestamp)[1]]));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, []);

    return (
        <ContentCard loading={loading} header="Purchases">
            <div>
                <div>
                    Last month&apos;s purchases volume: {purchasesLast} €
                </div>
                <div>
                    Last year&apos;s purchases volume: {purchases} €
                </div>
            </div>
        </ContentCard>
    )
}

export default PurchasesCard;