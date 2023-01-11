import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RootState } from '../../redux/store';
import styles from './profile.module.scss';
import Chart from '../../components/Charts/charts';
import Checkbox from '../../components/Checkbox/checkbox';

const Profile: React.FC = () => {
  const items = useSelector((state: RootState) => state.profile.items);
  useEffect(() => {
    const massives = JSON.stringify(items);
    localStorage.setItem('favorite', massives);
  }, [items]);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Favorite</h1>
        <div className={styles.content}>
          <Checkbox />
          {items.length === 0 ? (
            <h2 style={{ color: 'white' }}>Your favorite movies will be displayed here</h2>
          ) : (
            <div className={styles.wrapper}>
              {items.map((item) => (
                <Favorites key={item.id} {...item} />
              ))}
            </div>
          )}
          <div className={styles.chart}>
            <Chart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
