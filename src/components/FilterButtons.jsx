import React from 'react';

const FilterButtons = ({ buttons }) => {
  return (
    <div className="w-full flex justify-center gap-2 md:gap-x-[84px] py-6 flex-wrap">
      {buttons.map(button => (
        <button key={button.text} type="button" className="relative">
          <img src="./images/icon_hex.svg" alt="Hex Button" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-light">
            <img src={button.icon} alt={button.text} className="h-14 w-14" />
            <span>{button.text}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
