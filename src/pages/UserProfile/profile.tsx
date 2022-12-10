import React from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RootState } from '../../redux/store';
import styles from './profile.module.scss';

const Profile: React.FC = () => {
  const items = useSelector((state: RootState) => state.profile.items);
  // const cartItem = useSelector((state: RootState) =>
  //   state.film.items.find((obj: any) => obj.id === id),
  // );
  return (
    <>
      <Header setOpen={String} />
      <div className={styles.container}>
        <h1 className={styles.title}>Избранное</h1>
        <div className={styles.wrapper}>
          {items.map((item) => (
            <Favorites key={item.id} {...item} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
