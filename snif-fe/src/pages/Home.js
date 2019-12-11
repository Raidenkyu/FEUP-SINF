import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "../components/common/layout/Layout";
import logo from "../../src/assets/logo.png";

import { USER_PERMISSIONS } from "../actions/UserActions";
import { ROUTES } from "../AppRouter";

import HomeStyles from "../styles/home/Home.module.css";

let Home = ({ userRole, routes }) => (
    <Layout navbar={false} sidebar={false}>
        {userRole !== "none" ?
            <ul className={HomeStyles.userArea}>
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path} className={HomeStyles.routeLink}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
            :
            <Link to ="/login" className={`${HomeStyles.userArea} ${HomeStyles.link}`}>
                Login
            </Link>
        }

        <div className={HomeStyles.container}>
            <div className={HomeStyles.panel}></div>
        </div>
        <img className={HomeStyles.logo} src={logo} alt=""></img>
    </Layout>
);

const mapStateToProps = (state) => {
    if (state.user) {
        return {
            userRole: state.user.role,
            routes: ROUTES.filter((route) => USER_PERMISSIONS[state.user.role].includes(route.path)),
        };
    }

    return {
        userRole: "none",
    };
};

Home = connect(
    mapStateToProps,
)(Home);

Home.propTypes = {
    userRole: PropTypes.string.isRequired,
    routes: PropTypes.array,
};

export default Home;
