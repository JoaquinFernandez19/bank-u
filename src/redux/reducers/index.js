import { combineReducers } from 'redux';

export const loginStateReducer = (loginState = false, action) => {
  if (action.type === 'SUBMIT_LOGIN') {
    return (loginState = true);
  }
  return loginState;
};

export const loginErrorReducer = (errorOpen = false, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return (errorOpen = true);
    case 'LOGIN_ERROR_CLOSED':
      return (errorOpen = false);
    default:
      return errorOpen;
  }
};

export default combineReducers({
  loginError: loginErrorReducer,
  loginState: loginStateReducer,
});
