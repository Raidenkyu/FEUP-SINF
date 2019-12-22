import React, { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

import ContentCard from "./ContentCard";
import ContentTable from "./ContentTable";

const PaginatedTable = ({ endpoint, header, tableHeaders, pageSize, list, onRowClick }) => {
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
            console.log(data);
            
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
    }, [endpoint, page, pageSize, list]);

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

    return (
        <ContentCard loading={loading} header={header}>
            <ContentTable
                headers={tableHeaders}
                rows={rows}
                handlePrevious={handlePrevious}
                previous={previous}
                handleReset={handleReset}
                handleNext={handleNext}
                next={next}
                onRowClick={onRowClick}
            />
        </ContentCard>
    );
};

PaginatedTable.propTypes = {
    endpoint: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    tableHeaders: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
    list: PropTypes.string.isRequired,
    onRowClick: PropTypes.func.isRequired,
}

export default PaginatedTable;