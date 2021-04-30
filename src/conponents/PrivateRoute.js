import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const PrivateRoute = ({
  component: Component,
  isAuthentificated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthentificated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.getIsAutentificated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
