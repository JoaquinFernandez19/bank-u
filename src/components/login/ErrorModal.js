import React from 'react';
import { connect } from 'react-redux';
import { closePopUpError } from '../../redux/actions';

const ErrorModal = ({ loginError, closePopUpError }) => {
  if (loginError) {
    return (
      <div className="error-modal">
        <h1>
          Wrong credentials, please check the README in the github repository
        </h1>
        <button
          onClick={() => {
            closePopUpError();
          }}
        >
          Close
        </button>
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    loginError: state.loginError,
  };
};

export default connect(mapStateToProps, { closePopUpError })(ErrorModal);
