import { combineReducers } from 'redux';
//Login reducers
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
//Bank reducers

export const cashReducer = (cash = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CASH':
      return (cash = action.payload.amount);
    default:
      return cash;
  }
};
export const digitalReducer = (digital = 0, action) => {
  switch (action.type) {
    case 'CHANGE_DIGITAL':
      return (digital = action.payload.amount);
    default:
      return digital;
  }
};

export const changeModal = (who = null, action) => {
  switch (action.type) {
    case 'OPEN_CHANGE':
      return (who = action.payload.who);
    case 'CLOSE_CHANGE':
      return (who = null);
    default:
      return who;
  }
};

export default combineReducers({
  changeModal: changeModal,
  cash: cashReducer,
  digital: digitalReducer,
  loginError: loginErrorReducer,
  loginState: loginStateReducer,
});
