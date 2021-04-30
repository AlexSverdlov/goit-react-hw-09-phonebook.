//npm
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
//module
import authSelectors from '../redux/auth/auth-selectors';

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const isAuthentificated = useSelector(authSelectors.getIsAutentificated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthentificated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
