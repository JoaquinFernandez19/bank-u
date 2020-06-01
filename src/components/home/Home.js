import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ loginState }) => {
  if (loginState) {
    return (
      <div>
        <h1>Bank!</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>
        Please <Link to="/">login</Link>
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state.loginState,
  };
};

export default connect(mapStateToProps)(Home);
