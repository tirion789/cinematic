import React from 'react';
import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './profile.module.scss';

const Profile: React.FC = () => {
  return (
    <>
      <Header setOpen={String} />
      <div className={styles.container}>
        <Favorites />
        <Footer />
      </div>
    </>
  );
};

export default Profile;
