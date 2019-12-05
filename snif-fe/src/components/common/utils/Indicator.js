import React from "react";
import PropTypes from "prop-types";

import IndicatorStyles from "../../../styles/common/utils/Indicator.module.css";

const Indicator = ({ value }) => (
    <div className={IndicatorStyles.indicator}>
        {value}
    </div>
)

Indicator.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Indicator;