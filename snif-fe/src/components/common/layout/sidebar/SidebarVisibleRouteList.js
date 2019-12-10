import { connect } from 'react-redux'
import SidebarRoutes from "./SidebarRouteList";

const SIDEBAR_ROUTES = [
    { path: "/overview", label: "Overview", allowedUsers: ['admin'] },
    { path: "/sales", label: "Sales", allowedUsers: ['admin'] },
    { path: "/purchases", label: "Purchases", allowedUsers: ['admin'] },
    { path: "/stocks", label: "Stocks", allowedUsers: ['admin'] },
    { path: "/orders", label: "Orders", allowedUsers: ['admin'] },
    { path: "/customers", label: "Customers", allowedUsers: ['admin'] },
    { path: "/financial", label: "Financial", allowedUsers: ['admin'] },
]

const getVisibleRoutes = (user) => {
    if (user) {
        return SIDEBAR_ROUTES.filter(route => route.allowedUsers.includes(user.role))
    }

    return [];
}

const mapStateToProps = state => {
    return {
        routes: getVisibleRoutes(state.user)
    }
}

const SidebarVisibleRouteList = connect(
    mapStateToProps,
)(SidebarRoutes)

export default SidebarVisibleRouteList