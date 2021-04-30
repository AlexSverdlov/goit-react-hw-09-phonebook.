//npm
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//module
import { addContact } from '../redux/contacts/contacts-operations';
import contactSelectors from '../redux/contacts/contacts-selectors';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, Setname] = useState('');
  const [number, Setnumber] = useState('');

  const items = useSelector(contactSelectors.getItems);

  const handleChangeName = useCallback(e => {
    Setname(e.currentTarget.value);
  }, []);

  const handleChangeNumber = useCallback(e => {
    Setnumber(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      if (items.find(item => item.name.toUpperCase() === name.toUpperCase())) {
        alert(name + ' is already in contacts');
      } else {
        dispatch(addContact(contact));
        Setname('');
        Setnumber('');
      }
    },
    [dispatch, name, number, items],
  );

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Form.Group>
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Номер</Form.Label>
        <Form.Control
          type="text"
          name="number"
          value={number}
          onChange={handleChangeNumber}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Добавить контакт
      </Button>
    </Form>
  );
}
