import React from 'react';

const Card = ({ text, image }) => {
  return (
    <div className="relative cursor-pointer">
      <img src={image} className="h-full w-full" alt="card" />
      <div className="absolute left-0 bottom-0 bg-primary-300 p-2 text-light">{text}</div>
    </div>
  );
};

export default Card;
