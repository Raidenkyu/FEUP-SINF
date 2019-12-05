import React from "react";
import { Table } from 'reactstrap';
import PropTypes from "prop-types";

import ContentTableStyles from "../../../styles/common/utils/ContentTable.module.css"

const ContentTable = ({ headers, rows }) => (
    <Table borderless>
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
                <tr key={index} className={ContentTableStyles.row}>
                    {headers.map((header, subIndex) => (
                        <td key={subIndex} className="text-center">
                            {row[header.index]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
)

ContentTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContentTable;