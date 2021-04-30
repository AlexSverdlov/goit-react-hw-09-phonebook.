import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './Authnav';
import UserMenu from './UserMenu';
import authSelectors from '../redux/auth/auth-selectors';
import Navbar from 'react-bootstrap/Navbar';

const Appbar = ({ isAutentificated }) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Navigation />
        {isAutentificated ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
};

const mapDispatchToProps = state => ({
  isAutentificated: authSelectors.getIsAutentificated(state),
});

export default connect(mapDispatchToProps)(Appbar);
