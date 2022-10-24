import React from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__name}>CINETREX</li>
        <li className={styles.header__buttons_list}>
          <button className={styles.header__buttons}>Sign in</button>
          <button className={styles.header__buttons}>Join</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
