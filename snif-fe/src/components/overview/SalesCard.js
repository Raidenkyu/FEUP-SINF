import React, { useState, useEffect } from "react";
import Axios from "axios";
import ContentCard from "../common/utils/ContentCard";

const SalesCard = () => {
    const [loading, setLoading] = useState(true);
    const [revenueLast, setRevenueLast] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/overview/sales", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setRevenueLast(new Intl.NumberFormat('de-DE').format(data.salesByTimestamp[Object.keys(data.salesByTimestamp)[0]].revenue));
            setRevenue(new Intl.NumberFormat('de-DE').format(data.salesByTimestamp[Object.keys(data.salesByTimestamp)[1]].revenue));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, []);

    return (
        <ContentCard loading={loading} header="Sales">
            <div>
                <div>
                    Last month&apos;s sales volume: {revenueLast} €
                </div>
                <div>
                    Last year&apos;s sales volume: {revenue} €
                </div>
            </div>
        </ContentCard>
    )
}

export default SalesCard;