//npm
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//Module
import authOperations from '../redux/auth/auth-operations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');

  const handleChangeName = useCallback(e => {
    Setname(e.currentTarget.value);
  }, []);
  const handleChangeEmail = useCallback(e => {
    Setemail(e.currentTarget.value);
  }, []);
  const handleChangePassword = useCallback(e => {
    Setpassword(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      Setname('');
      Setemail('');
      Setpassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <h3>Страница регистрации</h3>
      <Form.Group controlId="formName">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Регистрация
      </Button>
    </Form>
  );
}
