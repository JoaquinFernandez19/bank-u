import React from 'react';

const SubmitButton = ({ type, text }) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};

export default SubmitButton;
