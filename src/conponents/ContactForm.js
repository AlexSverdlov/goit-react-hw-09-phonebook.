import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../redux/contacts/contacts-operations';
import contactSelectors from '../redux/contacts/contacts-selectors';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    if (
      this.props.items.find(
        item => item.name.toUpperCase() === this.state.name.toUpperCase(),
      )
    ) {
      alert(this.state.name + ' is already in contacts');
    } else {
      this.props.onSubmit(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} autoComplete="off">
        <Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Номер</Form.Label>
          <Form.Control
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Добавить контакт
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  items: contactSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: item => dispatch(addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
