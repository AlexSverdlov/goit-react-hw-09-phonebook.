import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAuthentificated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthentificated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.getIsAutentificated(state),
});

export default connect(mapStateToProps)(PublicRoute);
