import React from 'react';
import PropTypes from 'prop-types';

export function Screen({ data, power }) {
  const style1 = 'w-[401px] h-[70px] justify-end items-center gap-2.5 inline-flex';
  const screenStyle = power === false ? style1.concat(' bg-stone-600') : style1.concat(' bg-stone-50');

  return (
    <div className="w-[425px] h-[147px] px-2.5 py-5 rounded-[20px] border border-neutral-500 flex-col justify-start items-end gap-2.5 inline-flex">
      <div className="w-[134px] h-[27px] bg-stone-600" />
      <div className={screenStyle}>
        <div className="w-[82px] h-[60px] px-4 text-white text-2xl font-normal font-['Inconsolata'] flex justify-end items-center">
          {data}
        </div>
      </div>
    </div>
  );
}

Screen.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  power: PropTypes.bool.isRequired,
};

export default Screen;
