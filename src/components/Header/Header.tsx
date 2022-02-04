import React from 'react';
import { DefaultRate } from '../DefaultRate/DefaultRate';
import { Logo } from '../Logo/Logo';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { Navigation } from '../Navigation/Navigation';

import classes from './Header.module.scss';

export const Header:React.FC = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <MobileNavigation />
      <Navigation />
      <DefaultRate />
    </header>
  );
};
