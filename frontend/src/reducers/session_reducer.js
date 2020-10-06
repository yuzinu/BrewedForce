import {
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
isAuthenticated: false,
user: null
});

export default function(state = _nullUser, action) {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return {
      isAuthenticated: !!action.currentUser,
      user: action.currentUser
    };
  case LOGOUT_CURRENT_USER:
    return _nullUser;
  default:
    return state;
  }
}