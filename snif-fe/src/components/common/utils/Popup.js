import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PopupStyles from "../../../styles/common/utils/Popup.module.css";
import PropTypes from "prop-types";


const Popup = ({ isOpen, toggle, data }) => {

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
        >
            <ModalHeader className={PopupStyles.header}>{data.name}</ModalHeader>
            <ModalBody>
                {data.name}
            </ModalBody>
        </Modal>

    );

};
Popup.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Popup;