import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export function ButtonGrid({ handleOnClick }) {
  return (
    <div className="w-[425px] h-[373px] px-2.5 py-[30px] justify-start items-start gap-[25px] inline-flex items-center">
      <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
        <div className="justify-start items-start gap-[25px] inline-flex items-center">
          <Button valueType="operand" value="Off" handleClick={handleOnClick} />
          <Button valueType="operand" value="C" handleClick={handleOnClick} />
          <Button valueType="operand" value="del" handleClick={handleOnClick} />
        </div>
        <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
          <Button valueType="number" value={7} handleClick={handleOnClick} />
          <Button valueType="number" value={8} handleClick={handleOnClick} />
          <Button valueType="number" value={9} handleClick={handleOnClick} />
          <Button valueType="number" value={4} handleClick={handleOnClick} />
          <Button valueType="number" value={5} handleClick={handleOnClick} />
          <Button valueType="number" value={6} handleClick={handleOnClick} />
          <Button valueType="number" value={1} handleClick={handleOnClick} />
          <Button valueType="number" value={2} handleClick={handleOnClick} />
          <Button valueType="number" value={3} handleClick={handleOnClick} />
          <Button valueType="number" value="." handleClick={handleOnClick} />
          <Button valueType="number" value={0} handleClick={handleOnClick} />
          <Button valueType="number" value="=" handleClick={handleOnClick} />
        </div>
      </div>
      <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
        <Button valueType="operand" value="%" handleClick={handleOnClick} />
        <Button valueType="operand" value="/" handleClick={handleOnClick} />
        <Button valueType="operand" value="*" handleClick={handleOnClick} />
        <Button valueType="operand" value="-" handleClick={handleOnClick} />
        <Button valueType="operand" value="+" handleClick={handleOnClick} />
      </div>
    </div>
  );
}

ButtonGrid.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default ButtonGrid;
