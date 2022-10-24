import React from 'react';
import styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const navigations = ['Home', 'Genre', 'Country', 'Movies', 'TV Series', 'TopImDb'];

  return (
    <ul className={styles.navigation}>
      {navigations.map((navigationName) => (
        <li className={styles.navigation__item}>{navigationName}</li>
      ))}
    </ul>
  );
};

export default Navigation;
