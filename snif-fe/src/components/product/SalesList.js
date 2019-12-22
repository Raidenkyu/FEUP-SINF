import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

import PaginatedTable from "../common/utils/PaginatedTable";

const SalesList = ({ productKey, setModalLoading, onRowClick, setModalData }) => {
    const salesHeaders = [
        { index: "invoiceId", value: "Sale ID" },
        { index: "clientName", value: "Client" },
        { index: "clientTaxID", value: "Client tax ID" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
    ];
    
    const modalHeaders = [
        { index: "invoiceId", value: "Sale ID" },
        { index: "clientName", value: "Client" },
        { index: "clientTaxID", value: "Client tax ID" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
        { index: "salesList", value: "Products sold", headers: [
            { index: "product", value: "Product" },
            { index: "quantity", value: "Quantity" },
            { index: "value", value: "Value (€)" },
            { index: "revenue", value: "Revenue (€)" },
        ] },
    ]

    const handleOnRowClick = ({ invoiceId }) => {
        setModalLoading(true);
        onRowClick();

        Axios.get(`http://localhost:9000/api/sales/${invoiceId}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            }
        }).then(({ data }) => {
            setModalLoading(false);
            setModalData({
                headers: modalHeaders,
                data: data
            });
        }).catch(() => {
            onRowClick();
            setModalLoading(false);
        })
    }

    return (
        <PaginatedTable
            endpoint={`/api/stocks/product/${productKey}/sales`}
            header="Sales List"
            tableHeaders={salesHeaders}
            pageSize={15}
            list="salesList"
            onRowClick={handleOnRowClick}
        />
    );
};

SalesList.propTypes = {
    productKey: PropTypes.string.isRequired,
    setModalLoading: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
}

export default SalesList;