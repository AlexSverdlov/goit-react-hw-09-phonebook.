import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Appbar from './conponents/AppBar';
import Container from './conponents/Container/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './conponents/PrivateRoute';
import PublicRoute from './conponents/PublicRoute';
import './App.css';

const Homeview = lazy(() => import('./views/Homeview'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends React.Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
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
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
