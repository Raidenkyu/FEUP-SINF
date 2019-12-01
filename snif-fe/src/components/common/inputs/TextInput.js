import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

// import TextInputStyles from "../../../styles/common/inputs/text-input.module.css";

const TextInput = ({ id, label, type, placeholder, options }) => (
    <FormGroup>
        {label !== null ? <Label for={id}>{label}</Label> : ""}
        {type === "select" ?
            <Input type={type} name={id} id={id} placeholder={placeholder} />
            :
            <Input type={type} name={id} id={id} placeholder={placeholder}>
                {options.map((option) => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </Input>
        }
    </FormGroup>
);

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

export default TextInput;
