import React from 'react';
import { connect } from 'react-redux';
import { formatter } from './formatter';

const MoneyShow = (props) => {
  const moneyToShow = props.typeOf === 'cash' ? props.cash : props.digital;

  return (
    <div className="money-display">
      <p>{formatter.format(parseInt(moneyToShow))}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cash: state.cash,
    digital: state.digital,
  };
};

export default connect(mapStateToProps)(MoneyShow);
