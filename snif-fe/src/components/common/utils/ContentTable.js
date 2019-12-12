import React, { useState } from "react";
import { Table } from 'reactstrap';
import PropTypes from "prop-types";

import ContentTableStyles from "../../../styles/common/utils/ContentTable.module.css"
import Popup from "./Popup";

const ContentTable = ({ headers, rows }) => {

    const action = (fds) => {
        setModal(true);
        setModalData(fds);
    };
    const [modal,setModal] = useState(false);
    const [modalData,setModalData] = useState({});

    const toggle = () => {
        setModal(!modal);
        setModalData({});
    };

    return(
    <Table borderless hover>
        <thead>
            <tr className={ContentTableStyles.headerContainer}>
                {headers.map((header, index) => (
                    <th className={ContentTableStyles.header + " text-center"} key={index}>
                        {header.value}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, index) => (
                <tr onClick={() => action(row)} key={index} className={ContentTableStyles.row}>
                    {headers.map((header, subIndex) => (
                        <td key={subIndex} className="text-center">
                            {row[header.index]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
        <Popup isOpen={modal} toggle={toggle} data={modalData}/>
    </Table>
)};

ContentTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContentTable;