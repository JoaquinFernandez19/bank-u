import React from 'react';
import { withRouter } from 'react-router-dom';

const Welcome = ({ history }) => {
  return (
    <div
      className="fadeIn"
      onAnimationEnd={() => {
        history.push('/home');
      }}
    >
      <h1>Welcome to Banku!</h1>
    </div>
  );
};
export default withRouter(Welcome);
