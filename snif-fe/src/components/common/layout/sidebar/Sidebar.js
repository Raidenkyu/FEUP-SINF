import React from "react";
import PropTypes from "prop-types";

import SidebarRouteList from "./SidebarRouteList"

import { ReactComponent as LeftArrow } from "../../../../assets/left-arrow.svg";
import { ReactComponent as SignOut } from "../../../../assets/sign-out.svg";

import SidebarStyles from "../../../../styles/common/sidebar.module.css";

const Sidebar = ({ path, collapsed, toggleSidebar, routes, logout }) => {return (
    <div className={SidebarStyles.sidebarContainer + (collapsed ? ` ${SidebarStyles.collapsed}` : "")}>
        <div className={[SidebarStyles.item, SidebarStyles.topItem].join(" ")}>
            <LeftArrow onClick={toggleSidebar} className={SidebarStyles.leftArrow} />
            <SignOut onClick={logout} className={SidebarStyles.signOut} />
        </div>
        <SidebarRouteList path={path} routes={routes} />
    </div>
)};

Sidebar.propTypes = {
    path: PropTypes.string.isRequired,
    collapsed: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired,
};

export default Sidebar;
