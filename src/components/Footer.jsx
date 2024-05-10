import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}>
    <div className={styles.copyright}>
        <p>@2024 Dream. All Rights Reserved</p>
      </div>
    <div className={styles.copyright}>
        <p>Mobile: (073) 456 4343</p>
      </div>
      <div className={styles.copyright}>
        <p>Email: Dream@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
