import React from 'react';
import styles from './additionalInformation.module.scss';

type DopProps = {
  country: string;
  flag: string;
};

const Dop: React.FC<DopProps> = ({ country, flag }) => {
  return (
    <div className={styles.additionalInformation}>
      <div className={styles.additionalInformation__container}>
        <p className={styles.additionalInformation__country}>{country}</p>
        <img width={42} className={styles.additionalInformation__flag} src={flag} alt="" />
      </div>
      <ul style={{ display: 'flex' }}>
        <li>
          <ul>
            <li>Genre:</li>
            <li>Release:</li>
            <li>Director:</li>
            <li>Cast:</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>asdf</li>
            <li>fdsa</li>
            <li>asdffdsa</li>
            <li>asdfasdf</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dop;
