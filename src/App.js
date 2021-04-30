//npm
import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//css
import './App.css';
//module
import Appbar from './conponents/AppBar';
import Container from './conponents/Container/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './conponents/PrivateRoute';
import PublicRoute from './conponents/PublicRoute';
//lazy
const Homeview = lazy(() => import('./views/Homeview'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Appbar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <Route exact path="/" component={Homeview} />
          <PublicRoute path="/login" restricted component={LoginView} />
          <PublicRoute path="/register" restricted component={RegisterView} />
          <PrivateRoute path="/contacts" component={ContactsView} />
        </Switch>
      </Suspense>
    </Container>
  );
}
