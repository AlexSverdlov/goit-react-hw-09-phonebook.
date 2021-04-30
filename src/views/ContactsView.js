import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../conponents/ContactForm';
import Filter from '../conponents/Filter';
import ContactList from '../conponents/ContactList.container';
import { fetchContact } from '../redux/contacts/contacts-operations';

class ContactsView extends React.Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div>
        <h3>Страница контактов</h3>
        <ContactForm />
        <hr />
        <h3 style={{ marginTop: '20px' }}>Контакты</h3>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(null, mapDispatchToProps)(ContactsView);
