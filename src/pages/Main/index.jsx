import React from 'react';

import BodyGraph from '../../components/BodyGraph';
import DateAchievementRate from '../../components/DateAchievementRate';
import FilterButtons from '../../components/FilterButtons';
import GridRecords from '../../components/GridRecords';
import ScrollToTopButton from '../../components/ScrollToTopButton';

const filterButtons = [
  { icon: './images/icon_knife.svg', text: 'Morning' },
  { icon: './images/icon_knife.svg', text: 'Lunch' },
  { icon: './images/icon_knife.svg', text: 'Dinner' },
  { icon: './images/icon_cup.svg', text: 'Snack' },
];

const recordItems = [
  { text: '05.02.Morning', image: './images/column-1.jpg' },
  { text: '06.02.Morning', image: './images/column-2.jpg' },
  { text: '07.02.Morning', image: './images/column-3.jpg' },
  { text: '08.02.Morning', image: './images/column-4.jpg' },
  { text: '09.02.Morning', image: './images/column-5.jpg' },
  { text: '10.02.Morning', image: './images/column-6.jpg' },
  { text: '12.02.Morning', image: './images/column-7.jpg' },
  { text: '15.02.Morning', image: './images/column-8.jpg' },
  { text: '25.02.Morning', image: './images/column-1.jpg' },
  { text: '25.02.Lunch', image: './images/column-3.jpg' },
  { text: '24.02.Morning', image: './images/column-4.jpg' },
  { text: '31.02.Morning', image: './images/column-6.jpg' },
];

const Main = () => {
  return (
    <main>
      <div className="flex flex-wrap">
        <DateAchievementRate className="md:basis-1/3" />
        <BodyGraph className="md:basis-2/3" />
      </div>
      <div className="max-w-default m-auto px-4 lg:px-0 flex flex-row">
        <FilterButtons buttons={filterButtons} />
      </div>
      <div className="max-w-default m-auto px-4 lg:px-0 mb-16">
        <GridRecords items={recordItems} />
      </div>

      <ScrollToTopButton />
    </main>
  );
};

export default Main;
