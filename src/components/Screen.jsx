import React from 'react';
import PropTypes from 'prop-types';

export function Screen({ value }) {
  return (
    <div className="w-[425px] h-[147px] px-2.5 py-5 rounded-[20px] border border-neutral-500 flex-col justify-start items-end gap-2.5 inline-flex">
      <div className="w-[134px] h-[27px] bg-stone-600" />
      <div className="w-[401px] h-[70px] bg-stone-600 justify-end items-center gap-2.5 inline-flex">
        <div className="w-[82px] h-[60px] px-4 text-white text-2xl font-normal font-['Inconsolata'] flex justify-end items-center">
          {value}
        </div>
      </div>
    </div>
  );
}

Screen.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Screen;
