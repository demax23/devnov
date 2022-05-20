import React from 'react';
import Header from '../Header';
import ItemList from '../ItemsList';
import Footer from '../Footer';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <ItemList />
      <Footer />
    </div>
  );
};

export default MainPage;
