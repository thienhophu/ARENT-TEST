import React from 'react';

import FilterButtons from '../../components/FilterButtons';
import GridRecords from '../../components/GridRecords';

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
  { text: '05.02.Morning', image: './images/column-6.jpg' },
  { text: '05.02.Morning', image: './images/column-7.jpg' },
  { text: '05.02.Morning', image: './images/column-8.jpg' },
  { text: '05.02.Morning', image: './images/column-1.jpg' },
  { text: '05.02.Morning', image: './images/column-3.jpg' },
  { text: '05.02.Morning', image: './images/column-4.jpg' },
  { text: '05.02.Morning', image: './images/column-6.jpg' },
];

const MyRecords = () => (
  <main>
    <div className="max-w-default m-auto flex flex-row">
      <FilterButtons buttons={filterButtons} />
    </div>
    <div className="max-w-default m-auto mb-16">
      <GridRecords items={recordItems} />
    </div>
  </main>
);

export default MyRecords;
