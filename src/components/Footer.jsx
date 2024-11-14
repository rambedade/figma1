// src/components/Footer.jsx
import React from 'react';
import footerImage from '../assets/footer.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <p>© 2024, Omega Orion Pvt. Ltd.</p>
      <div className={styles.socialIcons}>
        <span>🌍</span>
        <span>📷</span>
        <span>🎨</span>
        <span>📧</span>
      </div>
    </footer>
  );
};

export default Footer;
