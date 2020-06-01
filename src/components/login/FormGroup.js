import React, { useRef, useState } from 'react';

const FormGroup = ({ ph, setValue, type, value }) => {
  //state

  const [innerPlaceholder, setInnerPlaceholder] = useState(ph);
  //references
  const input = useRef(null);

  const handleFocus = () => {
    setInnerPlaceholder('');
    input.current.classList.remove('invalid-input', 'valid-input');
  };
  //Function from the Form parent component
  const setInputValue = () => {
    setValue(input.current.value);
  };
  const handleBlur = () => {
    setInnerPlaceholder(ph);
  };

  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={innerPlaceholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={input}
        value={value}
        onChange={setInputValue}
      />
    </div>
  );
};

export default FormGroup;
