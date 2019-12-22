import React from "react";
import PropTypes from "prop-types";

import PaginatedTable from "../common/utils/PaginatedTable";

const SalesList = ({ productKey }) => {
    const salesHeaders = [
        { index: "id", value: "Sale ID" },
        { index: "product", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "revenue", value: "Revenue (€)" },
    ];

    return (
        <PaginatedTable
            endpoint={`/api/stocks/${productKey}/sales`}
            header="Sales List"
            tableHeaders={salesHeaders}
            pageSize={10}
            list="transactions"
        />
    );
};

SalesList.propTypes = {
    productKey: PropTypes.string.isRequired,
}

export default SalesList;