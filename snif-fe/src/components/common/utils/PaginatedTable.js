import React, { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

import ContentCard from "./ContentCard";
import ContentTable from "./ContentTable";

const PaginatedTable = ({ endpoint, headers, pageSize, list, onRowClick }) => {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(1);
    const [next, setNext] = useState(true);
    const [previous, setPrevious] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:9000" + endpoint + "?page=" + page + "&pageSize=" + pageSize, {
            headers: {
                auth_token: localStorage.getItem("auth_token"),
            },
        }).then(({ data }) => {
            setRows(data[list]);

            if (data[list].length === 15) {
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
    const handleonRowClick = (data) => { 
        const newdata = {
            headers: headers,
            data: data
        };
        onRowClick(newdata);
    };

    return (
        <ContentCard loading={loading} header="Purchases">
            <ContentTable
                headers={headers}
                rows={rows}
                handlePrevious={handlePrevious}
                previous={previous}
                handleReset={handleReset}
                handleNext={handleNext}
                next={next}
                onRowClick={handleonRowClick}
            />
        </ContentCard>
    );
};

PaginatedTable.propTypes = {
    endpoint: PropTypes.string.isRequired,
    headers: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
    list: PropTypes.string.isRequired,
}

export default PaginatedTable;