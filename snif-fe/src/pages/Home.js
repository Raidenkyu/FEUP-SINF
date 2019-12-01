import React from "react";
import { Link } from "@reach/router";
import Layout from "../components/common/Layout";
import logo from "../../src/assets/logo.png";

import HomeStyles from "../styles/home/Home.module.css";

const Home = () => (
    <Layout navbar={false} sidebar={false}>
        <Link to ="/login" className={HomeStyles.link}>
            Login
        </Link>
        <div className={HomeStyles.container}>
            <svg className={HomeStyles.panel} ></svg>
        </div>
        <img className={HomeStyles.logo} src={logo} alt=""></img>
    </Layout>
);

export default Home;
