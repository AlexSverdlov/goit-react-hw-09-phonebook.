//npm
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
//module
import Navigation from './Navigation';
import AuthNav from './Authnav';
import UserMenu from './UserMenu';
import authSelectors from '../redux/auth/auth-selectors';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsAutentificated);

  return (
    <header>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
}
