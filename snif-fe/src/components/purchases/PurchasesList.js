import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

import PaginatedTable from "../common/utils/PaginatedTable";

const PurchasesList = ({ setModalLoading, onRowClick, setModalData }) => {
    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "name", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    const modalHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "name", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "supplierName", value: "Supplier name" },
        { index: "taxId", value: "Tax ID" },
        { index: "purchaseId", value: "Purchase ID" },
        { index: "date", value: "Date" },
        { index: "total", value: "Order total (€)" },
    ]

    const handleOnRowClick = (headers, row) => {
        setModalLoading(true);
        onRowClick();

        Axios.get(`http://localhost:9000/api/purchases/${row.purchaseId}`, {
            auth_token: localStorage.getItem("auth_token"),
        }).then(({ data }) => {
            console.log(data);
            
            setModalLoading(false);
            setModalData({
                headers: modalHeaders,
                data: {
                    ...row,
                    ...data,
                },
            });
        }).catch(() => {
            onRowClick();
        })
    }

    return (
        <PaginatedTable
            endpoint="/api/purchases/list"
            header="Purchases List"
            tableHeaders={purchasesHeaders}
            pageSize={15}
            list="purchasesList"
            onRowClick={handleOnRowClick}
        />
    );
};

PurchasesList.propTypes = {
    setModalLoading: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
}

export default PurchasesList;