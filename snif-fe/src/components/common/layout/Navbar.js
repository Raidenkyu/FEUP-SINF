import React from "react";
import Img from "react-image";
import { Link } from "@reach/router";
import { Navbar, NavbarToggler } from "reactstrap";
import PropTypes from "prop-types";

import NavbarStyles from "../../../styles/common/navbar.module.css";
import Logo from "../../../assets/logo.png";

const NavBar = ({ openSidebar, sidebar }) => (
    <Navbar color="faded" fixed="top" dark className={NavbarStyles.navbar}>
        {sidebar ?
            <NavbarToggler onClick={openSidebar} className={`mr-auto ${NavbarStyles.toggler}`} /> : ""
        }
        <Link to="/" className={`mr-2${sidebar ? "" : " ml-auto"}`}>
            <Img src={Logo} className={NavbarStyles.image}/>
        </Link>
    </Navbar>
);

NavBar.propTypes = {
    openSidebar: PropTypes.func.isRequired,
    sidebar: PropTypes.bool.isRequired,
};

export default NavBar;
