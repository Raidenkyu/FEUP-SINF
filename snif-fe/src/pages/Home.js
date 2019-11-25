import React from "react";

import Header from "../components/home/Header";
import Layout from "../components/common/Layout";

import HomeStyles from "../styles/home/Home.module.css";

import { requestOrders }  from "../lib/api/jasmin";

const Home = () => {
    requestOrders();
    return (
        <Layout>
            <div className={HomeStyles.home}>
                <Header />
            </div>
        </Layout>
    );
};

export default Home;
