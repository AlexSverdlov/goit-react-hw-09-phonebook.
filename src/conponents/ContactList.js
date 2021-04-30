//npm
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
//module
import * as actions from '../redux/contacts/contacts-operations';
import contactSelectors from '../redux/contacts/contacts-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.visibleContacts);

  return (
    <ListGroup>
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item key={id}>
          {name}: {number}
          <Button
            variant="outline-primary"
            type="button"
            size="sm"
            onClick={() => dispatch(actions.delContact(id))}
            style={{ marginLeft: '20px' }}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
