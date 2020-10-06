import * as SessionAPI from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = user => dispatch => (
    SessionAPI.signup(user).then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      SessionAPI.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
  })
  .catch(err => {
      dispatch(receiveErrors(err.response.data));
  })
);

export const login = user => dispatch => (
    SessionAPI.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPI.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
);

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionAPI.setAuthToken(false);
    dispatch(logoutUser());
};