import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { themeSelector } from '../../redux/theme';
// import withAuth from '../../hoc/withAuth';
import routes from '../../routes';

import styles from './Navigation.module.scss';


const Navigation = ({ isAuthenticated, isChecked }) => {
  const color = `${styles.link} ${
    isChecked ? styles.link.dark : styles.link.light
    }`
  return (
    <nav>

      {
        routes.map(route => (
          <Fragment key={route.label} >
            {
              (((route.private && !route.restricted) && isAuthenticated) || (!route.private && !route.restricted)) &&
              (<NavLink
                exact={route.exact}
                to={route.path}
                className={color}
                activeClassName={styles.activeLink}
              >
                {route.label}
              </NavLink>)
            }
          </Fragment>
        ))
      }

      {/* <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}>
        Home
    </NavLink>

      {
        isAuthenticated && (
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        )
      } */}

    </nav >
  )
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  isChecked: themeSelector.getIsChecked(state),
});


export default connect(mapStateToProps)(Navigation);

