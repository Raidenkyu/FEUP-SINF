import React, { useState, useEffect } from "react";
import Axios from "axios";

import ContentCard from "../common/utils/ContentCard";
import ContentTable from "../common/utils/ContentTable";

const PurchasesList = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [purchasesRows, setPurchasesRows] = useState([]);
    const [next, setNext] = useState(true);
    const [previous, setPrevious] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/purchases/list?page=" + page + "&pageSize=15", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setPurchasesRows(data.purchasesList);

            if (data.purchasesList.length === 15) {
                setNext(true);
            } else {
                setNext(false);
            }

            if (page === 1) {
                setPrevious(false);
            } else {
                setPrevious(true);
            }

            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [page]);

    const handleNext = () => {
        setLoading(true);
        setPage(page+1);
    }

    const handlePrevious = () => {
        if (page - 1 >= 1) {
            setLoading(true);
            setPage(page-1);
        }
    }

    const handleReset = () => {
        setLoading(true);
        setPage(1);
    }

    const purchasesHeaders = [
        { index: "purchaseId", value: "Purchase id" },
        { index: "name", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <ContentCard loading={loading} header="Purchases">
            <ContentTable
                headers={purchasesHeaders}
                rows={purchasesRows}
                handlePrevious={handlePrevious}
                previous={previous}
                handleReset={handleReset}
                handleNext={handleNext}
                next={next}
            />
        </ContentCard>
    );
};

export default PurchasesList;