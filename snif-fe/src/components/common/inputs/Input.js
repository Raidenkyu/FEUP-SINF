import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

import InputStyles from "../../../styles/common/inputs/input.module.css";

const InputCustom = ({ id, label, type, placeholder, onChange, options }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleUnfocus = () => {
        setFocused(false);
    };

    return (
        <FormGroup className={focused ? InputStyles.inputFocused : InputStyles.inputUnfocused}>
            {label !== null ? <Label for={id}>{label}</Label> : ""}
            {type === "select" ?
                <Input
                    type={type}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleUnfocus}
                    onChange={onChange}
                    className={InputStyles.input}
                >
                    {options.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </Input>
                :
                <Input
                    type={type}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleUnfocus}
                    onChange={onChange}
                    className={InputStyles.input}
                />
            }
        </FormGroup>
    );
};

InputCustom.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
};

export default InputCustom;
