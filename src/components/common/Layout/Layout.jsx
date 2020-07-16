import React from "react";
import PropTypes from "prop-types";

import AppBar from "../AppBar";

// redux
import { connect } from "react-redux";
import { themeSelector } from '../../../redux/theme';

// styles
import styles from "./Layout.module.scss";

function Layout(props) {
  const { children, theme } = props;

  return (
    <div
      className={`${styles.container} ${
        theme.themeConfig === "dark" ? styles.dark : styles.ligth
        }`}
    >
      <AppBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = state => {
  return {
    theme: themeSelector.getThemeConfig(state),
  };
};

export default connect(mapStateToProps)(Layout);