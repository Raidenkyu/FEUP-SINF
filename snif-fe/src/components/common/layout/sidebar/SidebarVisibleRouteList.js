import { connect } from 'react-redux'
import SidebarRoutes from "./SidebarRouteList";
import { USER_PERMISSIONS } from "../../../../actions/UserActions";
import { ROUTES } from "../../../../AppRouter";

const getVisibleRoutes = (user) => {
    if (user) {
        return ROUTES.filter(route => USER_PERMISSIONS[user.role].includes(route.path))
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