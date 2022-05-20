import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import style from './MainLayout.module.scss';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={style.page_wrapper}>{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
