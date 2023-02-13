import React from 'react';

const ColumnRecommendations = ({ items }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        {items.map(item => (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center h-[144px] bg-dark-600 gap-y-2 cursor-pointer"
          >
            <div className="uppercase text-primary-300 text-xl lg:text-2xl text-center">
              {item.title}
            </div>
            <div className="w-14 h-[1px] bg-light" />
            <div className="text-light">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnRecommendations;
