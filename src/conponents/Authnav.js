//npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
    padding: 10,
  },
  activelink: {
    color: 'white',
  },
};

const AuthNav = () => (
  <Nav>
    <Nav.Item>
      <NavLink
        exact
        to="/register"
        className="NavLink"
        activeClassName="NavLink-active"
        style={styles.link}
        activeStyle={styles.activelink}
      >
        Регистрация
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink
        exact
        to="/login"
        className="NavLink"
        activeClassName="NavLink-active"
        style={styles.link}
        activeStyle={styles.activelink}
      >
        Войти
      </NavLink>
    </Nav.Item>
  </Nav>
);

export default AuthNav;
