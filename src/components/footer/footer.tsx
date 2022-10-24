import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <h1 className={styles.footer__title}>Links</h1>
        <div className={styles.footer__link}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__items}>Movies</li>
            <li className={styles.footer__items}>Tv Series</li>
            <li className={styles.footer__items}>Short Films</li>
            <li className={styles.footer__items}>Most Watched</li>
            <li className={styles.footer__items}>Top IMdb</li>
            <li className={styles.footer__items}>F2 Movies</li>
            <li className={styles.footer__items}>Actions</li>
            <li className={styles.footer__items}>Horror</li>
            <li className={styles.footer__items}>Sci - fi</li>
            <li className={styles.footer__items}>K Drama</li>
            <li className={styles.footer__items}>Romantic</li>
          </ul>

          <ul>
            <li>Contact</li>
            <li>Request</li>
            <li>Mail</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__container}>
        <h1>About Us</h1>
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
    </div>
  );
};

export default Footer;
