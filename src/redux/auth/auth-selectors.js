const getIsAutentificated = state => state.auth.isAutheticated;

const getUserMail = state => state.auth.user.email;

export default {
  getIsAutentificated,
  getUserMail,
};
