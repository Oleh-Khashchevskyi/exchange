import React from 'react';
import { Logo } from '../Logo/Logo';

import classes from './Footer.module.scss';

export const Footer:React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Logo />
    </footer>
  );
};
