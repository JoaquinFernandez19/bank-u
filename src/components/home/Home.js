import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/bank.scss';
//Components
import Cash from './Cash';
import Digital from './Digital';
import MoneyInput from './MoneyInput';
//Extra
import { formatter } from './formatter';

const Home = ({ loginState, cash, digital }) => {
  const total = parseInt(parseInt(cash) + parseInt(digital));

  if (loginState) {
    return (
      <div className="bank-container">
        <MoneyInput />
        <Cash />
        <Digital />
        <div className="total-money-display">
          <h1>Total money</h1>
          <h2>{formatter.format(total)}</h2>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>
        Please <Link to="/">login</Link>
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cash: state.cash,
    digital: state.digital,
    loginState: state.loginState,
  };
};

export default connect(mapStateToProps)(Home);
