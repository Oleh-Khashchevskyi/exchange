import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import classes from './Home.module.scss';

export const Home:React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className={classes.title}>Welcome to our exchange rate website</h1>
        <NavLink to="/rates">
          <button
            type="button"
            className={classes.button}
          >
            Show Rates
          </button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
};
