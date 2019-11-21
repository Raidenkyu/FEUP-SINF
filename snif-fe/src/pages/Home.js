import React from 'react';

import Header from "../components/home/Header"
import Layout from "../components/common/Layout"

import HomeStyles from '../styles/home/Home.module.css';

import { requestAccessToken }  from "../lib/api/jasmin";

const Home = () => {
    requestAccessToken();
  
    return (
        <Layout>
            <div className={HomeStyles.home}>
                <Header />
            </div>
        </Layout>
    );
}

export default Home;