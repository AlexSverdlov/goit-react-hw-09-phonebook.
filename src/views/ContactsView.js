//npm
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//module
import ContactForm from '../conponents/ContactForm';
import Filter from '../conponents/Filter';
import ContactList from '../conponents/ContactList';
import { fetchContact } from '../redux/contacts/contacts-operations';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContact()), [dispatch]);
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
