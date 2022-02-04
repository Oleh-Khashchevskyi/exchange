import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import classes from './PageNotFound.module.scss';

export const PageNotFound:React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className={classes.title}>Page Not Found...</h1>
      </main>
      <Footer />
    </>
  );
};
