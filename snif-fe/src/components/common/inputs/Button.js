import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import ButtonStyles from "../../../styles/common/inputs/button.module.css";

const ButtonCustom = ({ id, label, onClick, block }) => {
    const [hovered, setHovered] = useState(false);

    const handleHoverIn = () => {
        setHovered(true);
    };
    const handleHoverOut = () => {
        setHovered(false);
    };

    return (
        <Button
            id={id}
            block={block ? true : false}
            onMouseOver={handleHoverIn}
            onMouseOut={handleHoverOut}
            onClick={onClick}
            className={`${ButtonStyles.button} ${hovered ? ButtonStyles.buttonHoverIn : ButtonStyles.buttonHoverOut}`}
        >
            {label}
        </Button>
    );
};

ButtonCustom.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    block: PropTypes.bool,
};

export default ButtonCustom;
