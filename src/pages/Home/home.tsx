import React from 'react';
import Header from '../../components/header/header';
import Navigation from '../../components/Navigation/navigation';
import Search from '../../components/Search';
import styles from './home.module.scss';
import Recommended from '../../components/Recommended/recommended';
import Footer from '../../components/footer/footer';
import FilmList from '../../components/FilmList/filmList';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <p className={styles.title}>Find Movies, TV Series and much more</p>
        <Search />
        <div className={styles.container}>
          <Recommended />
          <FilmList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
