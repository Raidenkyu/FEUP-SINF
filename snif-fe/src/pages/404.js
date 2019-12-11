import React from "react";
import Layout from "../components/common/layout/Layout";
import { Link } from "@reach/router";

import NotFoundStyles from "../styles/not-found/NotFound.module.css";

const NotFound = () => (
    <Layout>
        <div className={`${NotFoundStyles.notFoundContainer} d-flex flex-column justify-content-center align-items-center`}>
            <div className={NotFoundStyles.info}>
                You either like 404 pages or your lack of navigation is disturbing...
            </div>
            <div className={NotFoundStyles.label}>
                404
            </div>
            <Link to="/" className={NotFoundStyles.link}>
                Return home
            </Link>
        </div>
    </Layout>
);

export default NotFound;
