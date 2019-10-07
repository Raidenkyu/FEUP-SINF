import React from 'react';

import Header from "../components/home/Header"

import HomeStyles from '../style/home/Home.module.css';

const Home = () => {
  return (
    <div className={HomeStyles.home}>
      <Header />
    </div>
  );
}

export default Home;