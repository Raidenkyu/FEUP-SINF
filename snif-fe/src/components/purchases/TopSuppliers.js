import React, { useState, useEffect } from "react";
import Axios from "axios";

import ContentTable from "../../components/common/utils/ContentTable";
import ContentCard from "../common/utils/ContentCard";
import Popup from "../common/utils/Popup";

const TopSuppliers = () => {
    const [loading, setLoading] = useState(true);
    const [suppliers, setSuppliers] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const toggle = () => {
        setModal(!modal);
        setModalData({ headers: [], data: {} });
    };

    const onRowClick = (data) => {
        setModal(!modal);
        setModalData(data);
    };

    const topSuppliersHeaders = [
        { index: "supplierId", value: "ID" },
        { index: "quantity", value: "Quantity (kg)" },
        { index: "priceRatio", value: "Price ratio (€/kg)" },
    ];

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
        <React.Fragment>
            <ContentCard loading={loading} header="Top Suppliers">
                <ContentTable headers={topSuppliersHeaders} rows={suppliers} onRowClick={onRowClick} />
            </ContentCard>
            <Popup isOpen={modal} toggle={toggle} headers={topSuppliersHeaders} data={modalData} />
        </React.Fragment>
    );
};

export default TopSuppliers;