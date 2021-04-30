import axios from 'axios';
import * as actions from './contacts-actions';

export const fetchContact = () => dispatch => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error.message)));
};

export const addContact = item => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

export const delContact = id => dispatch => {
  dispatch(actions.delContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.delContactSuccess(id)))
    .catch(error => dispatch(actions.delContactError(error.message)));
};
