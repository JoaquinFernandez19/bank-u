import React from 'react';
//Components
import Form from './Form';
import Welcome from './Welcome';
import ErrorModal from './ErrorModal';
//Style
import '../../styles/login.scss';
//Redux
import { connect } from 'react-redux';

const Login = ({ loginState }) => {
  if (!loginState) {
    return (
      <div className="login">
        <Form />
        <p>(this is just a static form, the login data is in the README)</p>
        <ErrorModal />
      </div>
    );
  }
  return (
    <div className="login">
      <Welcome />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state.loginState,
  };
};

export default connect(mapStateToProps)(Login);
