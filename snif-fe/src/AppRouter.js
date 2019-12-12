import React from "react";
import { Router } from "@reach/router";
import { connect } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Stocks from "./pages/Stocks";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Financial from "./pages/Financial";
import NotFound from "./pages/404";

import { USER_PERMISSIONS } from "./actions/AuthActions"

const ROUTES = [
    { path: "/overview", label: "Overview" },
    { path: "/sales", label: "Sales" },
    { path: "/purchases", label: "Purchases" },
    { path: "/stocks", label: "Stocks" },
    { path: "/orders", label: "Orders" },
    { path: "/customers", label: "Customers" },
    { path: "/financial", label: "Financial" },
]

let AppRouter = ({ userRole }) => {
    const hasPermission = path => {
        if (USER_PERMISSIONS[userRole]) {
            return USER_PERMISSIONS[userRole].includes(path);
        }
        return false;
    };

    return (
        <Router>
            <Home path="/" />
            <Login path="/login" />
            {hasPermission("/overview") && <Overview path="/overview"/>}
            {hasPermission("/sales") && <Sales path="/sales"/>}
            {hasPermission("/purchases") && <Purchases path="/purchases"/>}
            {hasPermission("/stocks") && <Stocks path="/stocks"/>}
            {hasPermission("/orders") && <Orders path="/orders"/>}
            {hasPermission("/customers") && <Customers path="/customers"/>}
            {hasPermission("/financial") && <Financial path="/financial"/>}
            <NotFound default />
        </Router>
    );
};

const mapStateToProps = state => {
    if (state.auth.user) {
        return {
            userRole: state.auth.user.role,
        }
    }

    return {
        userRole: "none",
    };
}

AppRouter = connect(
    mapStateToProps,
)(AppRouter)

export {
    ROUTES,
    AppRouter
};