import React from "react";

import PaginatedTable from "../common/utils/PaginatedTable";

const OrdersList = ({onRowClick}) => {
    const productHeaders = [
        { index: "id", value: "Order id" },
        { index: "product", value: "Product" },
        { index: "state", value: "State" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <PaginatedTable
            endpoint="/api/orders/list"
            headers={productHeaders}
            pageSize={15}
            list="ordersProducts"
            onRowClick={onRowClick}
        />
    );
};

export default OrdersList;