export const checkInput = (type, value) => {
  switch (type) {
    case 'username':
      return value === 'REACT123' ? true : false;
    case 'password':
      return value === 'REDUX321' ? true : false;
    default:
      return null;
  }
};
