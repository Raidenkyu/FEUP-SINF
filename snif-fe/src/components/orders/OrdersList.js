import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";

import PaginatedTable from "../common/utils/PaginatedTable";

const OrdersList = ({ setModalLoading, onRowClick, setModalData }) => {
    const productHeaders = [
        { index: "orderId", value: "Order ID" },
        { index: "state", value: "State" },
        { index: "clientName", value: "Client" },
        { index: "clientTaxID", value: "Client tax ID" },
        { index: "totalValue", value: "Total value (€)" },
        { index: "date", value: "Date" },
    ];
    
    const modalHeaders = [
        { index: "state", value: "State" },
        { index: "clientName", value: "Client" },
        { index: "clientTaxID", value: "Client tax ID" },
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

    return (
        <PaginatedTable
            endpoint="/api/orders/list"
            header="Orders List"
            tableHeaders={productHeaders}
            pageSize={15}
            list="ordersProducts"
            onRowClick={handleOnRowClick}
        />
    );
};

OrdersList.propTypes = {
    setModalLoading: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
}

export default OrdersList;