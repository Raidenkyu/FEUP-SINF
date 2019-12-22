import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

import PaginatedTable from "../common/utils/PaginatedTable";

const PurchasesList = ({ resourceKey, setModalLoading, onRowClick, setModalData }) => {
    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase ID" },
        { index: "supplierName", value: "Supplier" },
        { index: "supplierTaxID", value: "Supplier tax ID" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
    ];

    const modalHeaders = [
        { index: "supplierName", value: "Supplier" },
        { index: "supplierTaxID", value: "Supplier tax ID" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
        { index: "purchasesList", value: "Products acquired", headers: [
            { index: "productName", value: "Product" },
            { index: "productQuantity", value: "Quantity" },
            { index: "productValue", value: "Value (€)" },
        ] },
    ];

    const handleOnRowClick = ({ purchaseId }) => {
        setModalLoading(true);
        onRowClick();

        Axios.get(`http://localhost:9000/api/purchases/${purchaseId}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            }
        }).then(({ data }) => {
            setModalLoading(false);
            setModalData({
                headers: modalHeaders,
                data: data,
            });
        }).catch(() => {
            onRowClick();
            setModalLoading(false);
        })
    };

    return (
        <PaginatedTable
            endpoint={`/api/stocks/${resourceKey}/list`}
            header="Purchases List"
            tableHeaders={purchasesHeaders}
            pageSize={15}
            list="purchasesList"
            onRowClick={handleOnRowClick}
        />
    );
};

PurchasesList.propTypes = {
    resourceKey: PropTypes.string.isRequired,
    setModalLoading: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
}

export default PurchasesList;