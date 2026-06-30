import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Ivanna Store - Arte tejido con amor.</p>

      <div className={styles.socialLinks}>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
      </div>
      
      {/* Tu crédito profesional */}
      <p className={styles.credit}>
        Diseñado y desarrollado por <a href="https://github.com/LuiggiMejias-dev" target="_blank" rel="noopener noreferrer">LuiggiMejias-Dev</a>
      </p>

    </footer>
  );
};

export default Footer;