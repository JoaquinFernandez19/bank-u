import React from 'react';
import { connect } from 'react-redux';

const MoneyShow = (props) => {
  const moneyToShow = props.typeOf === 'cash' ? props.cash : props.digital;

  return (
    <div className="money-display">
      <p>
        <span>$U</span>
        {moneyToShow}
      </p>
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
