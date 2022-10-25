import React, { useState } from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__name}>CINETREX</li>
        <li className={styles.header__buttons_list}>
          <a onClick={() => setOpen(true)} className={styles.header__buttons}>
            Sign in
          </a>
          <a className={styles.header__buttons}>Join</a>
        </li>
      </ul>
      <div className={open ? styles.header__modal_overlay : ''}>
        <div className={`${styles.header__modal} ${open ? styles.header__modal_show : ''}`}>
          <div className={styles.header__modal_inner}>
            <button className={styles.header__close} onClick={() => setOpen(false)}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
