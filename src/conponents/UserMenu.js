import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  span: {
    padding: 10,
    color: 'white',
  },
};

const UserMenu = ({ email, onLogout }) => (
  <div>
    <span style={styles.span}>{email}</span>
    <Button variant="outline-light" type="button" size="sm" onClick={onLogout}>
      Выйти
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserMail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
