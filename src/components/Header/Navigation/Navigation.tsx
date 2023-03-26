import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../router/routes';
import classes from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        {routes.map((item) =>
          item.name !== '404' ? (
            <li key={item.name} className={classes['nav__list-item']}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? classes.active : classes.inactive)}
              >
                {item.name}
              </NavLink>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
}
