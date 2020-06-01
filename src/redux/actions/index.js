export const submitLogin = () => {
  return {
    type: 'SUBMIT_LOGIN',
  };
};

export const popUpError = () => {
  return {
    type: 'LOGIN_ERROR',
  };
};
export const closePopUpError = () => {
  return {
    type: 'LOGIN_ERROR_CLOSED',
  };
};
