import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PopupStyles from "../../../styles/common/utils/Popup.module.css";
import PropTypes from "prop-types";


const Popup = ({ isOpen, toggle, headers, data }) => {
    console.log(data);

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
        >
            <ModalBody className={PopupStyles.body}>

                <ListGroup flush>
                    {

                        headers.map((header)=> (
                            <ListGroupItem key={header.index} className={PopupStyles.item}>
                            <ListGroupItemHeading className={PopupStyles.heading}>{header.value}</ListGroupItemHeading>
                            <ListGroupItemText className={PopupStyles.text}>{data[header.index]}</ListGroupItemText>
                        </ListGroupItem>
                        ))}

                </ListGroup>
            </ModalBody>
        </Modal>

    );

};
Popup.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Popup;