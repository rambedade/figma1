// src/components/Header.jsx
import React from 'react';
import headerImage from '../assets/header1.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className={styles.title}>
        <h1>Pixel Bloom: AI Website Agency</h1>
      </div>
    </header>
  );
};

export default Header;
