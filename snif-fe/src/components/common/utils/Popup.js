import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Modal, ModalBody } from 'reactstrap';
import PropTypes from "prop-types";

import PopupStyles from "../../../styles/common/utils/Popup.module.css";

const Popup = ({ isOpen, toggle, headers, data }) => (
    <Modal
        isOpen={isOpen}
        toggle={toggle}
    >
        <ModalBody className={PopupStyles.body}>
            <ListGroup flush>
                {headers.map((header)=> (
                    <ListGroupItem key={header.index} className={PopupStyles.item}>
                        <ListGroupItemHeading className={PopupStyles.heading}>{header.value}</ListGroupItemHeading>
                        <ListGroupItemText className={PopupStyles.text}>{data[header.index]}</ListGroupItemText>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </ModalBody>
    </Modal>
);

Popup.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
    headers: PropTypes.array,
    data: PropTypes.object.isRequired,
};

export default Popup;