
import React from "react";
import PropTypes from "prop-types";

import SidebarItem from "./SidebarItem"

import { ReactComponent as LeftArrow } from "../../../../assets/left-arrow.svg";

import SidebarStyles from "../../../../styles/common/sidebar.module.css";

const Sidebar = ({ path, collapsed, toggleSidebar }) => {
    const routes = [
        { path: "/overview", label: "Overview", active: (path === "/overview") },
        { path: "/sales", label: "Sales", active: path === "/sales" },
        { path: "/purchases", label: "Purchases", active: path === "/purchases" },
        { path: "/stocks", label: "Stocks", active: path === "/stocks" },
        { path: "/orders", label: "Orders", active: path === "/orders" },
        { path: "/customers", label: "Customers", active: path === "/customers" },
        { path: "/financial", label: "Financial", active: path === "/financial" },
    ]
    
    return (
        <div className={SidebarStyles.sidebarContainer + (collapsed ? ` ${SidebarStyles.collapsed}` : "")}>
            <ul className={SidebarStyles.list}>
                <li className={[SidebarStyles.item, SidebarStyles.topItem].join(" ")}>
                    <LeftArrow onClick={toggleSidebar} className={SidebarStyles.leftArrow} />
                </li>
                {routes.map(route => (
                    <SidebarItem path={route.path} label={route.label} active={route.active} key={route.path} />
                ))}
            </ul>
        </div>
    )
};

Sidebar.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
