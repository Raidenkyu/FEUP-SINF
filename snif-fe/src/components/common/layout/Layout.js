import React, { useState } from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Sidebar from "./sidebar/SidebarContainer";

import LayoutStyles from "../../../styles/common/layout.module.css";

const Layout = ({ path, navbar, sidebar, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <React.Fragment>
            {navbar && <Navbar toggleSidebar={toggleSidebar} sidebar={sidebar} />}
            {sidebar && <Sidebar path={path} collapsed={collapsed} toggleSidebar={toggleSidebar} />}
            <div className={(navbar ? LayoutStyles.layoutContainer + " px-5 pb-5" : LayoutStyles.layoutContainerNoNav) }>
                {children}
            </div>
        </React.Fragment>
    );
};

Layout.propTypes = {
    navbar: PropTypes.bool,
    sidebar: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Layout;
