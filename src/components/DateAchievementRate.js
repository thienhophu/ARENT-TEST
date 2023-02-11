import React from 'react';
import classNames from 'classnames';

const DateAchievementRate = ({ className }) => (
  <div className={classNames('h-full basis-1/3 relative', className)}>
    <img src="./images/d01.jpg" alt="red" className="h-full w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center">
      <img src="./images/indicator.svg" alt="indicator" className="" />
    </div>
  </div>
);

export default DateAchievementRate;
