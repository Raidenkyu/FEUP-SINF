import React from 'react';
import logo from '../../assets/logo.svg';

import HomeStyles from '../../style/home/Home.module.css';

const Header = () => (
  <header className={HomeStyles.homeHeader}>
    <img src={logo} className={HomeStyles.homeLogo} alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className={HomeStyles.homeLink}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
)

export default Header;