import React from 'react';
import PropTypes from 'prop-types';

export function Button({ value, handleClick, valueType }) {
  const onClick = () => {
    handleClick(value);
  };

  const styles = `w-[81px] h-[45px] p-2.5 rounded-[5px] border border-black flex-col justify-center items-center gap-2.5 inline-flex ${valueType === 'operand' ? 'bg-stone-50' : 'bg-stone-300'} `;

  return (
    <button onClick={onClick} type="button" className={styles}>
      <div className="w-1/2 text-black text-2xl font-normal Inconsolata">
        {value}
      </div>
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valueType: PropTypes.oneOf(['number', 'operand']).isRequired,
};

export default Button;
