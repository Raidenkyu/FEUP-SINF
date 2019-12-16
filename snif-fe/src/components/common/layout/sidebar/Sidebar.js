import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import SidebarRouteList from "./SidebarRouteList"

import { ReactComponent as LeftArrow } from "../../../../assets/left-arrow.svg";
import { ReactComponent as SignOut } from "../../../../assets/sign-out.svg";

import SidebarStyles from "../../../../styles/common/sidebar.module.css";

const Sidebar = ({ path, collapsed, closeSidebar, routes, logout }) => {
    
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            closeSidebar();
        }
    };

    const handleKeyDown = ({ key }) => {
        if (key === "Escape") {
            closeSidebar();
        }
    }
    
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click",handleClickOutside, true);
        document.addEventListener("keydown",handleKeyDown,true);
    });

    return (
    <div ref={ref} className={SidebarStyles.sidebarContainer + (collapsed ? ` ${SidebarStyles.collapsed}` : "")}>
        <div className={[SidebarStyles.item, SidebarStyles.topItem].join(" ")}>
            <LeftArrow onClick={closeSidebar} className={SidebarStyles.leftArrow} />
            <SignOut onClick={logout} className={SidebarStyles.signOut} />
        </div>
        <SidebarRouteList path={path} routes={routes} />
    </div>
)};

Sidebar.propTypes = {
    path: PropTypes.string.isRequired,
    collapsed: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired,
};

export default Sidebar;
