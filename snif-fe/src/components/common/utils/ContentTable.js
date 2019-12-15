import React, { useState } from "react";
import { Table, Col, Row } from 'reactstrap';
import PropTypes from "prop-types";

import Popup from "./Popup";

import { ReactComponent as Previous } from "../../../assets/backward.svg";
import { ReactComponent as Next } from "../../../assets/forward.svg";
import { ReactComponent as Reset } from "../../../assets/reset.svg";
import ContentTableStyles from "../../../styles/common/utils/ContentTable.module.css";

const ContentTable = ({ headers, rows, handlePrevious, handleReset, handleNext }) => {

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
        <div>
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
                        <tr onClick={() => action(row)} key={index} className={row.error ? ContentTableStyles.errorRow : ContentTableStyles.row}>
                            {headers.map((header, subIndex) => (
                                <td key={subIndex} className="text-center">
                                    {row[header.index]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <Popup isOpen={modal} toggle={toggle} headers={headers} data={modalData}/>
            </Table>
            {handlePrevious && handleReset && handleNext && 
                <Row>
                    <Col xs="4" className={ContentTableStyles + " text-center"}>
                        <Previous className={ContentTableStyles.commandIcon} onClick={handlePrevious} />
                    </Col>
                    <Col xs="4" className="text-center">
                        <Reset className={ContentTableStyles.commandIcon} onClick={handleReset} />
                    </Col>
                    <Col xs="4" className="text-center">
                        <Next className={ContentTableStyles.commandIcon} onClick={handleNext} />
                    </Col>
                </Row>
            }
        </div>
    );
};

ContentTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    handlePrevious: PropTypes.func,
    handleReset: PropTypes.func,
    handleNext: PropTypes.func,
}

export default ContentTable;