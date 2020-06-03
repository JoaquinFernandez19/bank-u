import React from 'react';
import { AiFillCreditCard } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { openChange } from '../../redux/actions';
import { connect } from 'react-redux';
import { showModal } from './modalVisibility';
//Components
import MoneyShow from './MoneyShow';

const Digital = ({ openChange }) => {
  const handleOnClick = () => {
    openChange('digital');
    showModal();
  };
  return (
    <div className="digital">
      <AiFillCreditCard className="icons" />
      <MoneyShow typeOf="digital" />
      <FaRegEdit className="edit-icon" onClick={handleOnClick} />
    </div>
  );
};

export default connect(null, { openChange })(Digital);
