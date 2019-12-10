import React from "react";
import PropTypes from "prop-types";

import SidebarRoute from "./SidebarRoute";

import SidebarStyles from "../../../../styles/common/sidebar.module.css";

const SidebarRouteList = ({ path, routes }) => (
    <ul className={SidebarStyles.list}>
        {routes.map(route => (
            <SidebarRoute path={route.path} label={route.label} active={path === route.path} key={route.path} />
        ))}
    </ul>
);

SidebarRouteList.propTypes = {
    path: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired,
};

export default SidebarRouteList;