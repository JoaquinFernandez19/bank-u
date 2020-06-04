import React, { useState } from 'react';
import { connect } from 'react-redux';
import { closeChange, changeCash, changeDigital } from '../../redux/actions';
import { MdClose, MdCheck } from 'react-icons/md';
import { hideModal } from './modalVisibility';
//
const MoneyInput = ({
  closeChange,
  changeCash,
  changeDigital,
  changeModal,
}) => {
  const [amount, setAmount] = useState(0);
  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (changeModal === 'cash' && amount >= 0) {
      changeCash(amount);
      setAmount(0);
      closeChange();
      hideModal();
    } else if (changeModal === 'digital' && amount >= 0) {
      changeDigital(amount);
      setAmount(0);
      closeChange();
      hideModal();
    }
  };

  return (
    <div className="money-input-wrapper">
      <div className="money-input-inner">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={amount}
            onChange={handleOnChange}
            min="0"
          />
          <div className="form-buttons">
            <button type="submit">
              <MdCheck className="form-icon" />
            </button>
            <button
              onClick={() => {
                setAmount(0);
                closeChange();
                hideModal();
              }}
            >
              <MdClose className="form-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    changeModal: state.changeModal,
    cash: state.cash,
    digital: state.digial,
  };
};

export default connect(mapStateToProps, {
  closeChange,
  changeCash,
  changeDigital,
})(MoneyInput);
