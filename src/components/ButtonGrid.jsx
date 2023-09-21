import React from 'react';
import PropTypes from 'prop-types';
import FunctionalButtons from './FunctionalButtons';
import OperandButtons from './OperandButtons';
import BasicButtons from './BasicButtons';

export function ButtonGrid({ setNumber1 }) {
  return (
    <div className="w-[425px] h-[373px] px-2.5 py-[30px] justify-start items-start gap-[25px] inline-flex items-center">
      <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
        <FunctionalButtons setNumber1={setNumber1} />
        <BasicButtons setNumber1={setNumber1} />
      </div>
      <OperandButtons setNumber1={setNumber1} />
    </div>
  );
}

ButtonGrid.propTypes = {
  setNumber1: PropTypes.func.isRequired,
};

export default ButtonGrid;
