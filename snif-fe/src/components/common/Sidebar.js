
import React from 'react';

import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';

import SidebarStyles from '../../styles/common/sidebar.module.css';

const Sidebar = ({ collapsed, toggleSidebar }) => (
    <div className={SidebarStyles.sidebarContainer + (collapsed ? ' ' + SidebarStyles.collapsed : '')}>
        <ul className={SidebarStyles.list}>
            <li className={[SidebarStyles.item, SidebarStyles.topItem].join(' ')}>
                <LeftArrow onClick={toggleSidebar} className={SidebarStyles.leftArrow} />
            </li>
            <li className={SidebarStyles.item}>
                Sales
            </li>
            <li className={SidebarStyles.item}>
                Purchases
            </li>
            <li className={SidebarStyles.item}>
                Stocks
            </li>
            <li className={SidebarStyles.item}>
                Orders
            </li>
            <li className={SidebarStyles.item}>
                Customers
            </li>
            <li className={SidebarStyles.item}>
                Financial
            </li>
        </ul>
    </div>
)

export default Sidebar;