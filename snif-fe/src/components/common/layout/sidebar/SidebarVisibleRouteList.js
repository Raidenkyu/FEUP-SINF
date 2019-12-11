import { connect } from 'react-redux'
import SidebarRoutes from "./SidebarRouteList";
import { USER_PERMISSIONS } from "../../../../actions/UserActions";

const SIDEBAR_ROUTES = [
    { path: "/overview", label: "Overview" },
    { path: "/sales", label: "Sales" },
    { path: "/purchases", label: "Purchases" },
    { path: "/stocks", label: "Stocks" },
    { path: "/orders", label: "Orders" },
    { path: "/customers", label: "Customers" },
    { path: "/financial", label: "Financial" },
]

const getVisibleRoutes = (user) => {
    if (user) {
        return SIDEBAR_ROUTES.filter(route => USER_PERMISSIONS[user.role].includes(route.path))
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