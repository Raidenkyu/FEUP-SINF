import React, { useState, useEffect } from "react";
import Axios from "axios";

import ContentCard from "../common/utils/ContentCard";
import ContentTable from "../common/utils/ContentTable";

const OrdersList = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [productsRows, setProductsRows] = useState([]);
    const [next, setNext] = useState(true);
    const [previous, setPrevious] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:9000/api/orders/list?page=" + page + "&pageSize=15", {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setProductsRows(data.ordersProducts);

            if (data.ordersProducts.length === 15) {
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

    const productHeaders = [
        { index: "id", value: "Order id" },
        { index: "product", value: "Product" },
        { index: "state", value: "State" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value (€)" },
        { index: "date", value: "Date" },
    ];

    return (
        <ContentCard loading={loading} header="Orders List">
            <ContentTable
                headers={productHeaders}
                rows={productsRows}
                handlePrevious={handlePrevious}
                previous={previous}
                handleReset={handleReset}
                handleNext={handleNext}
                next={next}
            />
        </ContentCard>
    );
};

export default OrdersList;