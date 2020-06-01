import React, { useState } from 'react';
//Components
import FormGroup from './FormGroup';
import SubmitButton from './SubmitButton';
//Redux
import { connect } from 'react-redux';
import { submitLogin, popUpError } from '../../redux/actions';
//Validations
import { checkInput } from './validations';

const Form = ({ popUpError, submitLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkInput('username', username) && checkInput('password', password)) {
      submitLogin();
    }
    //Check if form is invalid and popUp the error
    if (
      !checkInput('username', username) ||
      !checkInput('password', password)
    ) {
      popUpError();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormGroup
        name="username"
        type="text"
        ph="Username"
        value={username}
        setValue={setUsername}
      />
      <FormGroup
        name="password"
        type="password"
        ph="Password"
        value={password}
        setValue={setPassword}
      />
      <SubmitButton type="submit" text="Login" />
    </form>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loginState: state.loginState,
  };
};

export default connect(mapStateToProps, {
  submitLogin,
  popUpError,
})(Form);
