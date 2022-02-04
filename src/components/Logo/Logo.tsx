import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.scss';

export const Logo:React.FC = () => {
  return (
    <NavLink to="/">
      <img src="./img/logo.png" alt="logo" className={classes.logo} />
    </NavLink>
  );
};
