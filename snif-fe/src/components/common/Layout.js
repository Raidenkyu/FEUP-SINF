import React, { useState } from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
            <div>
                {children}
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Layout;
