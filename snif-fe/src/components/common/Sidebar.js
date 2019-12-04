
import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";

import SidebarStyles from "../../styles/common/sidebar.module.css";

const Sidebar = ({ collapsed, toggleSidebar }) => (
    <div className={SidebarStyles.sidebarContainer + (collapsed ? ` ${SidebarStyles.collapsed}` : "")}>
        <ul className={SidebarStyles.list}>
            <li className={[SidebarStyles.item, SidebarStyles.topItem].join(" ")}>
                <LeftArrow onClick={toggleSidebar} className={SidebarStyles.leftArrow} />
            </li>
            <li className={SidebarStyles.item}>
                <Link to="/sales" className={SidebarStyles.link}>
                    Sales
                </Link>
            </li>
            <li className={SidebarStyles.item}>
                <Link to="/purchases" className={SidebarStyles.link}>
                    Purchases
                </Link>
            </li>
            <li className={SidebarStyles.item}>
                <Link to="/stocks" className={SidebarStyles.link}>
                    Stocks
                </Link>
            </li>
            <li className={SidebarStyles.item}>
                <Link to="/orders" className={SidebarStyles.link}>
                    Orders
                </Link>
            </li>
            <li className={SidebarStyles.item}>
                <Link to="/customers" className={SidebarStyles.link}>
                    Customers
                </Link>
            </li>
            <li className={SidebarStyles.item}>
                <Link to="/financial" className={SidebarStyles.link}>
                    Financial
                </Link>
            </li>
        </ul>
    </div>
);

Sidebar.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
