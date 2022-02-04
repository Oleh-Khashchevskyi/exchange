import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

export const Navigation:React.FC = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => classNames(classes.link, {
              [classes.active]: isActive,
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rates"
            className={({ isActive }) => classNames(classes.link, {
              [classes.active]: isActive,
            })}
          >
            Rates
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exchange"
            className={({ isActive }) => classNames(classes.link, {
              [classes.active]: isActive,
            })}
          >
            Exchange
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
