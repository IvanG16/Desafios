import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export function ButtonGrid({ handleOnClick }) {
  return (
    <div className="w-[425px] h-[373px] px-2.5 py-[30px] justify-start items-start gap-[25px] inline-flex items-center">
      <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
        <div className="justify-start items-start gap-[25px] inline-flex items-center">
          <Button valueType="operand" value="Off" buttonClick={handleOnClick} />
          <Button valueType="operand" value="C" buttonClick={handleOnClick} />
          <Button valueType="operand" value="del" buttonClick={handleOnClick} />
        </div>
        <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
          <Button valueType="number" value={7} buttonClick={handleOnClick} />
          <Button valueType="number" value={8} buttonClick={handleOnClick} />
          <Button valueType="number" value={9} buttonClick={handleOnClick} />
          <Button valueType="number" value={4} buttonClick={handleOnClick} />
          <Button valueType="number" value={5} buttonClick={handleOnClick} />
          <Button valueType="number" value={6} buttonClick={handleOnClick} />
          <Button valueType="number" value={1} buttonClick={handleOnClick} />
          <Button valueType="number" value={2} buttonClick={handleOnClick} />
          <Button valueType="number" value={3} buttonClick={handleOnClick} />
          <Button valueType="number" value="." buttonClick={handleOnClick} />
          <Button valueType="number" value={0} buttonClick={handleOnClick} />
          <Button valueType="number" value="=" buttonClick={handleOnClick} />
        </div>
      </div>
      <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
        <Button valueType="operand" value="%" buttonClick={handleOnClick} />
        <Button valueType="operand" value="/" buttonClick={handleOnClick} />
        <Button valueType="operand" value="*" buttonClick={handleOnClick} />
        <Button valueType="operand" value="-" buttonClick={handleOnClick} />
        <Button valueType="operand" value="+" buttonClick={handleOnClick} />
      </div>
    </div>
  );
}

ButtonGrid.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default ButtonGrid;
