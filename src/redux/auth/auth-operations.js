import axios from 'axios';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credential => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', credential)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch(error => dispatch(authActions.registerError(error.message)));
};

const login = credential => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/users/login', credential)
    .then(({ data }) => {
      // console.log(data);
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => dispatch(authActions.loginError(error.message)));
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get('/users/current')
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default { register, login, logout, getCurrentUser };
