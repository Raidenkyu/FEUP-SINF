import React from "react";

import PaginatedTable from "../common/utils/PaginatedTable";

const SalesList = () => {
    const salesHeaders = [
        { index: "id", value: "Sale id" },
        { index: "product", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <PaginatedTable
            endpoint="/api/sales/list"
            header="Sales List"
            tableHeaders={salesHeaders}
            pageSize={15}
            list="salesList"
        />
    );
};

export default SalesList;