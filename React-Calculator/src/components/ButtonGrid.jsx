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
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '='].map((value) => (
            <Button valueType="number" value={value} handleClick={handleOnClick} key={`button${value}`} />
          ))}
        </div>
      </div>
      <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
        {['%', '/', '*', '-', '+'].map((value) => (
          <Button valueType="operand" value={value} handleClick={handleOnClick} key={`button${value}`} />
        ))}
      </div>
    </div>
  );
}

ButtonGrid.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default ButtonGrid;
