import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export function BasicButtons({ setNumber1 }) {
  return (
    <div className="justify-start items-start gap-[25px] inline-flex flex-wrap items-center">
      <Button valueType="number" value={7} buttonClick={setNumber1} />
      <Button valueType="number" value={8} buttonClick={setNumber1} />
      <Button valueType="number" value={9} buttonClick={setNumber1} />
      <Button valueType="number" value={4} buttonClick={setNumber1} />
      <Button valueType="number" value={5} buttonClick={setNumber1} />
      <Button valueType="number" value={6} buttonClick={setNumber1} />
      <Button valueType="number" value={1} buttonClick={setNumber1} />
      <Button valueType="number" value={2} buttonClick={setNumber1} />
      <Button valueType="number" value={3} buttonClick={setNumber1} />
      <Button valueType="number" value={0} buttonClick={setNumber1} />
      <Button valueType="number" value="." buttonClick={setNumber1} />
      <Button valueType="number" value="=" buttonClick={setNumber1} />
    </div>
  );
}

BasicButtons.propTypes = {
  setNumber1: PropTypes.func.isRequired,
};

export default BasicButtons;
