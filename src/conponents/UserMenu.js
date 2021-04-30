//npm
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
//module
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  span: {
    padding: 10,
    color: 'white',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserMail);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div>
      <span style={styles.span}>{email}</span>
      <Button
        variant="outline-light"
        type="button"
        size="sm"
        onClick={onLogout}
      >
        Выйти
      </Button>
    </div>
  );
}
