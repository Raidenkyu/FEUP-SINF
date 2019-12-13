import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "reactstrap";

import LayoutStyles from "../../../styles/common/layout.module.css";

const Loading = ({ navbar }) => (
    <Spinner className={LayoutStyles.loadingSpinner} />
);

Loading.propTypes = {
    navbar: PropTypes.bool,
}

export default Loading;