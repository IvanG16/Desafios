import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export function FunctionalButtons({ setNumber1 }) {
  return (
    <div className="justify-start items-start gap-[25px] inline-flex items-center">
      <Button valueType="operand" value="Off" buttonClick={setNumber1} />
      <Button valueType="operand" value="C" buttonClick={setNumber1} />
      <Button valueType="operand" value="del" buttonClick={setNumber1} />
    </div>
  );
}

FunctionalButtons.propTypes = {
  setNumber1: PropTypes.func.isRequired,
};

export default FunctionalButtons;
