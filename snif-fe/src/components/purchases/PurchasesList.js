import React from "react";

import PaginatedTable from "../common/utils/PaginatedTable";

const PurchasesList = ({onRowClick}) => {
    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "name", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <PaginatedTable
            endpoint="/api/purchases/list"
            headers={purchasesHeaders}
            pageSize={15}
            list="purchasesList"
            onRowClick={onRowClick}
        />
    );
};

export default PurchasesList;