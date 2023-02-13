import React from 'react';
import ColumnRecommendations from '../../components/ColumnRecommendations';
import GridColumns from '../../components/GridColumns';
import ScrollToTopButton from '../../components/ScrollToTopButton';

const recommendItems = [
  { title: 'RECOMMENDED COLUMN', text: 'オススメ' },
  { title: 'RECOMMENDED DIET', text: 'ダイエット' },
  { title: 'RECOMMENDED BEAUTY', text: '美容' },
  { title: 'RECOMMENDED HEALTH', text: '健康' },
];

const columnItems = [
  {
    text: '05.02.Morning',
    image: './images/column-1.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '05.02.Lunch',
    image: './images/column-2.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '05.02.Dinner',
    image: './images/column-6.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '06.02.Morning',
    image: './images/column-3.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '06.02.Lunch',
    image: './images/column-4.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '06.02.Dinner',
    image: './images/column-7.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '07.02.Morning',
    image: './images/column-5.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '07.02.Lunch',
    image: './images/column-6.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '07.02.Dinner',
    image: './images/column-1.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '08.02.Morning',
    image: './images/column-2.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '08.02.Lunch',
    image: './images/column-3.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
  {
    text: '08.02.Dinner',
    image: './images/column-1.jpg',
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['#魚料理', '#和食', '#DHA'],
  },
];

const Columns = () => (
  <main>
    <div className="max-w-default m-auto my-14 px-4 lg:px-0">
      <ColumnRecommendations items={recommendItems} />
    </div>

    <div className="max-w-default m-auto px-4 lg:px-0 mb-16">
      <GridColumns items={columnItems} />
    </div>

    <ScrollToTopButton />
  </main>
);

export default Columns;
