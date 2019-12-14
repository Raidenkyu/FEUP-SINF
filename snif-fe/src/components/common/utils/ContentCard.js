import React from "react";
import { Card, CardHeader, CardBody, Spinner } from "reactstrap";
import PropTypes from "prop-types";

import ContentCardStyles from "../../../styles/common/utils/ContentCard.module.css";

const ContentCard = ({ loading, header, children }) => (
    <Card className={ContentCardStyles.card}>
        <CardHeader className={"text-center " + ContentCardStyles.cardHeader}>
            {header}
        </CardHeader>
        <CardBody className="d-flex justify-content-center align-items-center">
            {loading ? <Spinner className={ContentCardStyles.spinner} /> : children}
        </CardBody>
    </Card>
)

ContentCard.propTypes = {
    loading: PropTypes.bool,
    header: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export default ContentCard