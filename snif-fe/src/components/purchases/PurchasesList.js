import React, { useState } from "react";

import PaginatedTable from "../common/utils/PaginatedTable";
import Popup from "../common/utils/Popup";

const PurchasesList = () => {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "name", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    const toggle = () => {
        setModal(!modal);
        setModalData({ headers: [], data: {} });
    };
    
    const onRowClick = (data) => {
        setModal(!modal);
        setModalData(data);
    };

    return (
        <React.Fragment>
            <PaginatedTable
                endpoint="/api/purchases/list"
                header="Purchases List"
                tableHeaders={purchasesHeaders}
                pageSize={15}
                list="purchasesList"
                onRowClick={onRowClick}
            />
            <Popup isOpen={modal} toggle={toggle} headers={purchasesHeaders} data={modalData} />
        </React.Fragment>
    );
};

export default PurchasesList;