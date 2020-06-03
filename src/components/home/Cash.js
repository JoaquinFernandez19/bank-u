import React from 'react';
import { GiCash } from 'react-icons/gi';
import { FaRegEdit } from 'react-icons/fa';
import { openChange } from '../../redux/actions';
import { connect } from 'react-redux';
import { showModal } from './modalVisibility';
//Components
import MoneyShow from './MoneyShow';

const Cash = ({ openChange }) => {
  const handleOnClick = () => {
    openChange('cash');
    showModal();
  };

  return (
    <div className="cash">
      <GiCash className="icons" />
      <MoneyShow typeOf="cash" />
      <FaRegEdit className="edit-icon" onClick={handleOnClick} />
    </div>
  );
};

export default connect(null, { openChange })(Cash);
