import React, { useState, useEffect } from "react";
import Axios from "axios";


import ContentTable from "../../components/common/utils/ContentTable";
import ContentCard from "../common/utils/ContentCard"

const TopSuppliers = ({onRowClick}) => {
    
    const topSuppliersHeaders = [
        { index: "supplierId", value: "ID" },
        { index: "quantity", value: "Quantity (kg)" },
        { index: "priceRatio", value: "Price ratio (€/kg)" },
    ];
    
    const [loading, setLoading] = useState(true);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/purchases/suppliers", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setSuppliers(data.suppliers);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return (
        <ContentCard loading={loading} header="Top Suppliers">
            <ContentTable headers={topSuppliersHeaders} rows={suppliers} onRowClick={onRowClick}/>
        </ContentCard>
    );
};

export default TopSuppliers;