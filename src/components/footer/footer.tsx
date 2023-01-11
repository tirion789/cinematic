import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <h1 className={styles.footer__title}>About Us</h1>
        <p className={styles.footer__text}>
          <span className={styles.footer__span}>Movietrex</span> is free streaming website with zero
          ads, it allows you watch series online free, watch tv shows online in high quality for
          free.
        </p>
        <p className={styles.footer__text}>
          This site does not store any files on our server, we only linked to the media which is
          hosted on 3rd party services
        </p>
      </div>
    </footer>
  );
};

export default Footer;
