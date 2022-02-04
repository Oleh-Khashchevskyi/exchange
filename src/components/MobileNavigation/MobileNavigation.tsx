import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MobileNavigation.module.scss';

export const MobileNavigation:React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={classes.mobileNav}>
      <button
        type="button"
        className={classNames(classes.menuBtn, {
          [classes.active]: active,
        })}
        onClick={() => setActive(!active)}
      >
        <span className={classes.line} />
        <span className={classes.line} />
        <span className={classes.line} />
      </button>
      <nav>
        <ul
          className={classNames(classes.menu, {
            [classes.activeMenu]: active,
          })}
        >
          <li>
            <NavLink
              to="/"
              className={classes.link}
              onClick={() => {
                setActive(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rates"
              className={classes.link}
              onClick={() => {
                setActive(false);
              }}
            >
              Rates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exchange"
              className={classes.link}
              onClick={() => {
                setActive(false);
              }}
            >
              Exchange
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
