import React from 'react';
import PropTypes from 'prop-types';

export function Button({ value, buttonClick, valueType }) {
  const onClick = () => {
    buttonClick(value);
  };
  const styles = 'w-[81px] h-[45px] p-2.5 rounded-[5px] border border-black flex-col justify-center items-center gap-2.5 inline-flex';
  const backgroundColor = valueType === 'operand' ? styles.concat(' bg-stone-50') : styles.concat(' bg-stone-300');

  return (
    <button onClick={onClick} type="button" className={backgroundColor}>
      <div className="w-1/2 text-black text-2xl font-normal font-['Inconsolata']">
        {value}
      </div>
    </button>
  );
}

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valueType: PropTypes.oneOf(['number', 'operand']).isRequired,
};

export default Button;
