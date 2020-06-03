//Login actions

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

//Bank actions

export const changeCash = (amount) => {
  return {
    type: 'CHANGE_CASH',
    payload: {
      amount: amount,
    },
  };
};
export const changeDigital = (amount) => {
  return {
    type: 'CHANGE_DIGITAL',
    payload: {
      amount: amount,
    },
  };
};

//change values modal

export const openChange = (who) => {
  return {
    type: 'OPEN_CHANGE',
    payload: {
      who: who,
    },
  };
};

export const closeChange = () => {
  return {
    type: 'CLOSE_CHANGE',
  };
};
