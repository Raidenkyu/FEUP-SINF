import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

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
    )
};

export default Layout;