import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css'
import ThemeToggler from '../../ThemeToggler';

const AuthNav = () => (
  <div className={styles.container}>
    <ThemeToggler />
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
