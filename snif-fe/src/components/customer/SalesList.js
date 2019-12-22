import React from 'react';
import Axios from "axios";

import PaginatedTable from '../common/utils/PaginatedTable';


const SalesList = ({ customerKey, onRowClick, setModalLoading, setModalData }) => {
    const salesHeaders = [
        { index: "invoiceId", value: "Sale id" },
        { index: "totalValue", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    const modalHeaders = [
        { index: "invoiceId", value: "Sale ID" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
        { index: "salesList", value: "Products sold", headers: [
            { index: "product", value: "Product" },
            { index: "quantity", value: "Quantity" },
            { index: "value", value: "Value (€)" },
            { index: "revenue", value: "Revenue (€)" },
        ] },
    ];

    const handleOnRowClick = (row) => {
        setModalLoading(true);
        onRowClick();

        Axios.get(`http://localhost:9000/api/sales/${row.invoiceId}`, {
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

    return(
        <PaginatedTable
        endpoint={`/api/customers/sales/${customerKey}`}
        header="Sales List"
        tableHeaders={salesHeaders}
        pageSize={15}
        list="sales"
        onRowClick={handleOnRowClick}
    />
    );
};

export default SalesList;