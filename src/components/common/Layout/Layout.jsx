import React from "react";
import PropTypes from "prop-types";

import AppBar from "../AppBar";

// redux
import { connect } from "react-redux";
import { themeSelector } from '../../../redux/theme';

// styles
import styles from "./Layout.module.scss";

// const styles = {
//   container: {
//     width: '80vw',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     padding: '0 24px',
//   },
// };

function Layout(props) {
  const { children, isChecked } = props;

  return (
    <div
      className={`${styles.container} ${
        isChecked.isChecked ? styles.dark : styles.light
        }`}
    >
      <AppBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.object.isRequired

};

const mapStateToProps = state => {
  return {
    theme: themeSelector.getThemeConfig(state),
    isChecked: themeSelector.getIsChecked(state),
  };
};

export default connect(mapStateToProps)(Layout);