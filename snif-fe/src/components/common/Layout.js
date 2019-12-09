import React, { useState } from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import LayoutStyles from "../../styles/common/layout.module.css";

const Layout = ({ navbar, sidebar, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <>
            {navbar ?
                <Navbar toggleSidebar={toggleSidebar} sidebar={sidebar} /> : ""
            }
            {sidebar ?
                <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} /> : ""
            }
            <div className={(navbar ? LayoutStyles.layoutContainer + " px-5 pb-5" : LayoutStyles.layoutContainerNoNav) }>
                {children}
            </div>
        </>
    );
};

Layout.propTypes = {
    navbar: PropTypes.bool.isRequired,
    sidebar: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Layout;
