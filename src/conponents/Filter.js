//npm
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
//module
import * as actions from '../redux/contacts/contacts-actions';
import contactSelectors from '../redux/contacts/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector(contactSelectors.getFilter);

  const onChange = useCallback(
    e => {
      dispatch(actions.filterContact(e.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Найти контакт по имени</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        value={textFilter}
        onChange={onChange}
      />
    </Form.Group>
  );
}
