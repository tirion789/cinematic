import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RootState } from '../../redux/store';
import styles from './profile.module.scss';

const Profile: React.FC = () => {
  const items = useSelector((state: RootState) => state.profile.items);
  useEffect(() => {
    const massives = JSON.stringify(items);
    localStorage.setItem('favorite', massives);
  }, [items]);
  return (
    <>
      <Header setOpen={String} />
      <div className={styles.container}>
        <div className={styles.asdf}>
          <h1 className={styles.title}>Favorite</h1>
          {items.length === 0 ? (
            <h2 style={{ color: 'white' }}>Your favorite movies will be displayed here</h2>
          ) : (
            <div className={styles.wrapper}>
              {items.map((item) => (
                <Favorites key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
