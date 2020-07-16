import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';


import Section from '../common/Section';

import styles from './LoginForm.module.css';


class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Section title="Login page">
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit"
            className={styles.button}
            onClick={this.props.onLogin}>
            Login
          </button>
        </form>
      </Section>
    );
  };
};

export default connect(null, { onLogin: authOperations.logIn })(LoginForm);