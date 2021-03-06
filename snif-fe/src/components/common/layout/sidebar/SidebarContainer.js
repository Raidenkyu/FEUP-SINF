import { connect } from "react-redux";
import { navigate } from "@reach/router";

import Sidebar from "./Sidebar";
import { USER_PERMISSIONS, logout } from "../../../../actions/AuthActions";
import { ROUTES } from "../../../../AppRouter";

const getVisibleRoutes = (user) => {
    if (user) {
        return ROUTES.filter(route => USER_PERMISSIONS[user.role].includes(route.path))
    }

    return [];
}

const mapStateToProps = state => ({
    routes: getVisibleRoutes(state.auth.user)
})

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logout());
        localStorage.removeItem("auth_token");
        navigate("/");
    }
})

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sidebar)

export default SidebarContainer;