import React from "react";
import PropTypes from "prop-types";

import PaginatedTable from "../common/utils/PaginatedTable";

const PurchasesList = ({ resourceKey }) => {
    const purchasesHeaders = [
        { index: "id", value: "Purchase ID" },
        { index: "product", value: "Product" },
        { index: "state", value: "State" },
        { index: "supplier", value: "Supplier" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <PaginatedTable
            endpoint={`/api/stocks/${resourceKey}/purchases`}
            header="Purchases List"
            tableHeaders={purchasesHeaders}
            pageSize={15}
            list="transactions"
        />
    );
};

PurchasesList.propTypes = {
    resourceKey: PropTypes.string.isRequired,
}

export default PurchasesList;