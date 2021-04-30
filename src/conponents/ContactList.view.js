import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListGroup>
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item key={id}>
          {name}: {number}
          <Button
            variant="outline-primary"
            type="button"
            size="sm"
            onClick={() => onDelete(id)}
            style={{ marginLeft: '20px' }}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default ContactList;
