import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import * as actions from '../redux/contacts/contacts-actions';
import contactSelectors from '../redux/contacts/contacts-selectors';

const Filter = ({ textFilter, onChange }) => (
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

const mapStateToProps = state => ({
  textFilter: contactSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
