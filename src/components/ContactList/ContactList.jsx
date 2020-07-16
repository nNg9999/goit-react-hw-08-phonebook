import React from 'react';
import { string, arrayOf, exact } from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import ContactListItem from "../ContactListItems/ContactListItemsContainer";
// redux
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";


// styles
import styles from '../ContactList/ContactList.module.scss';


const ContactList = ({ contacts }) => {

  return (

    <TransitionGroup component="ul" className={styles.ContactList}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={styles.TaskListIitemFade}>
          <ContactListItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.defaultProps = {};

ContactList.propTypes = {
  contacts: arrayOf(exact({
    id: string.isRequired,
    name: string.isRequired,
    number: string.isRequired,
  })).isRequired,

};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVC(state),
})

export default connect(mapStateToProps)(ContactList);
