import React from "react";

import Header from "../components/home/Header";
import Layout from "../components/common/Layout";

import HomeStyles from "../styles/home/Home.module.css";

const Home = () => (
    <Layout>
        <div className={HomeStyles.home}>
            <Header />
        </div>
    </Layout>
);

export default Home;
