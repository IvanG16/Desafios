import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export function OperandButtons({ setNumber1 }) {
  return (
    <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
      <Button valueType="operand" value="%" buttonClick={setNumber1} />
      <Button valueType="operand" value="/" buttonClick={setNumber1} />
      <Button valueType="operand" value="*" buttonClick={setNumber1} />
      <Button valueType="operand" value="-" buttonClick={setNumber1} />
      <Button valueType="operand" value="+" buttonClick={setNumber1} />
    </div>
  );
}

OperandButtons.propTypes = {
  setNumber1: PropTypes.func.isRequired,
};

export default OperandButtons;
