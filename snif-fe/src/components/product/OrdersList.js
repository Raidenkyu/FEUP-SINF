import React from "react";
import PropTypes from "prop-types";

import PaginatedTable from "../common/utils/PaginatedTable";

const OrdersList = ({ productKey }) => {
    const productHeaders = [
        { index: "id", value: "Order ID" },
        { index: "state", value: "State" },
        { index: "product", value: "Product" },
        { index: "customer", value: "Client" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <PaginatedTable
            endpoint={`/api/stocks/${productKey}/orders`}
            header="Orders List"
            tableHeaders={productHeaders}
            pageSize={10}
            list="transactions"
        />
    );
};

OrdersList.propTypes = {
    productKey: PropTypes.string.isRequired,
}

export default OrdersList;