import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Modal, ModalBody, Spinner } from 'reactstrap';
import PropTypes from "prop-types";

import ContentTable from "./ContentTable";

import PopupStyles from "../../../styles/common/utils/Popup.module.css";

const Popup = ({ loading, isOpen, toggle, headers, data }) => (
    <Modal
        isOpen={isOpen}
        toggle={toggle}
    >
        <ModalBody className={PopupStyles.body + " d-flex justify-content-center"}>
            {loading ?
                <Spinner className={PopupStyles.spinner} />
                :
                <ListGroup flush className="w-100">
                    {headers.map((header) => (
                        <ListGroupItem key={header.index} className={PopupStyles.item}>
                            <ListGroupItemHeading className={PopupStyles.heading}>{header.value}</ListGroupItemHeading>
                            {Array.isArray(data[header.index]) ?
                                <ContentTable
                                    headers={header.headers}
                                    rows={data[header.index]}
                                />
                                :
                                <ListGroupItemText className={PopupStyles.text}>{data[header.index]}</ListGroupItemText>
                            }
                        </ListGroupItem>
                    ))}
                </ListGroup>
            }
        </ModalBody>
    </Modal>
);

Popup.propTypes = {
    loading: PropTypes.bool,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
    headers: PropTypes.array,
    data: PropTypes.object.isRequired,
};

export default Popup;