import React, { useState, useEffect } from "react";
import Axios from "axios";
import ContentCard from "../common/utils/ContentCard";

const StocksCard = () => {
    const [loading, setLoading] = useState(true);
    const [productStockValue, setProductStockValue] = useState(0);
    const [resourceStockValue, setResourceStockValue] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/overview/stock", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setProductStockValue(new Intl.NumberFormat('de-DE').format(data.assetsInStock.products));
            setResourceStockValue(new Intl.NumberFormat('de-DE').format(data.assetsInStock.resources));
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, []);

    return (
        <ContentCard loading={loading} header="Stocks">
            <div>
                <div>
                    Products value in stock: {productStockValue} €
                </div>
                <div>
                    Resources value in stock: {resourceStockValue} €
                </div>
            </div>
        </ContentCard>
    )
}

export default StocksCard;