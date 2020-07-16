import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.css';
import ThemeToggler from '../ThemeToggler';


const UserMenu = ({ avatar, name, email, onLogout }) => (
  <>
    <ThemeToggler />
    <div className={styles.container}>
      <div className={styles.containerAvatar}>
        <img src={avatar} alt=" " width="32" className={styles.avatar} />
        <span className={styles.name}>Welcome, {name}</span>
      </div>
      <span className={styles.email}> {email}</span>
      <div className={styles.Logout}>
        <button className={styles.button} type="submit" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  </>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);