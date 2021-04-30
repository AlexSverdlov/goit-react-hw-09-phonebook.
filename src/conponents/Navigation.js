//npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
//module
import authSelectors from '../redux/auth/auth-selectors';

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

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAutentificated);

  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink-active"
          style={styles.link}
          activeStyle={styles.activelink}
        >
          Home
        </NavLink>
      </Nav.Item>
      {isLoggedIn && (
        <Nav.Item as="li">
          <NavLink
            exact
            to="/contacts"
            className="NavLink"
            activeClassName="NavLink-active"
            style={styles.link}
            activeStyle={styles.activelink}
          >
            Контакты
          </NavLink>
        </Nav.Item>
      )}
    </Nav>
  );
}
