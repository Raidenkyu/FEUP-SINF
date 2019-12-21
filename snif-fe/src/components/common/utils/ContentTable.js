import React from "react";
import { Table, Col, Row } from 'reactstrap';
import PropTypes from "prop-types";

import { ReactComponent as Previous } from "../../../assets/backward.svg";
import { ReactComponent as Next } from "../../../assets/forward.svg";
import { ReactComponent as Reset } from "../../../assets/reset.svg";
import ContentTableStyles from "../../../styles/common/utils/ContentTable.module.css";

const ContentTable = ({ headers, rows, handlePrevious, previous, handleReset, handleNext, next, onRowClick }) => (
    <div className="w-100 h-100">
        <Table borderless hover className={ContentTableStyles.table}>
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
                    <tr onClick={() => onRowClick && onRowClick(headers, row)} key={index} className={row.error ? ContentTableStyles.errorRow : ContentTableStyles.row}>
                        {headers.map((header, subIndex) => (
                            <td key={subIndex} className="text-center">
                                {row[header.index]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        {handlePrevious && handleReset && handleNext &&
            <Row>
                <Col xs="4" className={ContentTableStyles + " text-center"}>
                    {previous && <Previous className={ContentTableStyles.commandIcon} onClick={handlePrevious} />}
                </Col>
                <Col xs="4" className="text-center">
                    <Reset className={ContentTableStyles.commandIcon} onClick={handleReset} />
                </Col>
                <Col xs="4" className="text-center">
                    {next && <Next className={ContentTableStyles.commandIcon} onClick={handleNext} />}
                </Col>
            </Row>
        }
    </div>
);

ContentTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    handlePrevious: PropTypes.func,
    previous: PropTypes.bool,
    handleReset: PropTypes.func,
    handleNext: PropTypes.func,
    next: PropTypes.bool,
}

export default ContentTable;