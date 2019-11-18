import React from 'react';

import Header from "../components/home/Header"

import HomeStyles from '../style/home/Home.module.css';

import { requestAccessToken}  from "../lib/api/jasmin";

const Home = () => {
  requestAccessToken();
  return (
    <div className={HomeStyles.home}>
      <Header />
    </div>
  );
}

export default Home;