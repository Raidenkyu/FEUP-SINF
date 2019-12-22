import React from "react";
import { navigate } from "@reach/router";

import PaginatedTable from "../common/utils/PaginatedTable";

const ResourcesList = () => {
    const onRowClick = ({ resourceKey }) => {
        navigate(`/stocks/resource/${resourceKey}`);
    }

    const resourcesHeaders = [
        { index: "name", value: "Name" },
        { index: "quantity", value: "Quantity (kg)" },
        { index: "value", value: "Value (€/kg)" },
    ];

    return (
        <PaginatedTable
            endpoint="/api/stocks/resources"
            header="Resources List"
            tableHeaders={resourcesHeaders}
            pageSize={10}
            list="resources"
            onRowClick={onRowClick}
        />
    );
};

export default ResourcesList;