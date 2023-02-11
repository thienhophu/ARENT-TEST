import React from 'react';

import BodyGraph from '../../components/BodyGraph';
import DateAchievementRate from '../../components/DateAchievementRate';
import FilterButtons from '../../components/FilterButtons';
import GridRecords from '../../components/Grid';

const filterButtons = [
  { icon: './images/icon_knife.svg', text: 'Morning' },
  { icon: './images/icon_knife.svg', text: 'Lunch' },
  { icon: './images/icon_knife.svg', text: 'Dinner' },
  { icon: './images/icon_cup.svg', text: 'Snack' },
];

const recordItems = [
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
  { text: '05.02.Morning', image: '.' },
];

const Main = () => (
  <main>
    <div className="h-80 flex">
      <DateAchievementRate className="basis-1/3" />
      <BodyGraph className="basis-2/3" />
    </div>
    <div className="max-w-default m-auto flex flex-row">
      <FilterButtons buttons={filterButtons} />
    </div>
    <div className="max-w-default m-auto mb-16">
      <GridRecords items={recordItems} />
    </div>
  </main>
);

export default Main;
