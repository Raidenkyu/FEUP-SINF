
import React from "react";
import PropTypes from "prop-types";

import SidebarVisibleRouteList from "./SidebarVisibleRouteList"

import { ReactComponent as LeftArrow } from "../../../../assets/left-arrow.svg";

import SidebarStyles from "../../../../styles/common/sidebar.module.css";

const Sidebar = ({ path, collapsed, toggleSidebar }) => {return (
    <div className={SidebarStyles.sidebarContainer + (collapsed ? ` ${SidebarStyles.collapsed}` : "")}>
        <div className={[SidebarStyles.item, SidebarStyles.topItem].join(" ")}>
            <LeftArrow onClick={toggleSidebar} className={SidebarStyles.leftArrow} />
        </div>
        <SidebarVisibleRouteList path={path} />
    </div>
)};

Sidebar.propTypes = {
    path: PropTypes.string.isRequired,
    collapsed: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
