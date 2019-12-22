import React from 'react';
import Axios from "axios";

import PaginatedTable from '../common/utils/PaginatedTable';


const PurchasesList = ({ supplierKey, onRowClick, setModalLoading, setModalData }) => {
    const ordersHeaders = [
        { index: "orderId", value: "Order id" },
        { index: "totalValue", value: "Value (€)" },
        { index: "date", value: "Date" },
        { index: "state", value: "State" },
    ];

    const modalHeaders = [
        { index: "state", value: "State" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
        { index: "orderList", value: "Ordered products", headers: [
            { index: "productName", value: "Product" },
            { index: "productQuantity", value: "Quantity" },
            { index: "productValue", value: "Value (€)" },
        ] },
    ];

    const handleOnRowClick = (row) => {
        setModalLoading(true);
        onRowClick();

        Axios.get(`http://localhost:9000/api/orders/${row.orderId}`, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            }
        }).then(({ data }) => {
            console.log("WTF");
            
            setModalLoading(false);
            setModalData({
                headers: modalHeaders,
                data: data,
            });
        }).catch((err) => {
            console.log(err);

            onRowClick();
            setModalLoading(false);
        })

    };

    return(
        <PaginatedTable
        endpoint={`/api/purchases/suppliers/orders/${supplierKey}`}
        header="Orders List"
        tableHeaders={ordersHeaders}
        pageSize={15}
        list="orders"
        onRowClick={handleOnRowClick}
    />
    );
};

export default PurchasesList;