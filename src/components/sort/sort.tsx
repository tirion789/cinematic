import React from 'react';
import styles from './sort.module.scss';

// const icon = (
//   <svg
//     className={styles.sort__icon}
//     width="13"
//     height="14"
//     viewBox="0 0 13 14"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M12.0418 1.41L10.9256 0L6.50016 5.59L2.07475 0L0.958496 1.41L5.38391 7L0.958496 12.59L2.07475 14L6.50016 8.41L10.9256 14L12.0418 12.59L7.61641 7L12.0418 1.41Z"
//       fill="black"
//     />
//   </svg>
// );

const titleArray = ['Trending', 'Action', 'Sitcom', 'Romantic', 'K drama'];

const Sort: React.FC = () => {
  return (
    <div className={styles.sort}>
      <p className={styles.sort__title}>Recommended</p>
      <ul className={styles.sort__list}>
        {titleArray.map((obj) => (
          <li className={styles.sort__item}>{obj}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
