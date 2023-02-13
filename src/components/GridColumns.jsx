import React from 'react';
import Card from './Card';

const GridColumns = ({ items }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
        {items.map(item => (
          <div className="flex flex-col gap-y-2" key={item.text}>
            <Card text={item.text} image={item.image} />
            <div className="text-ellipsis line-clamp-2">{item.title}</div>
            <div className="text-primary-400">
              {item.tags.map(tag => (
                <span className="hover:underline cursor-pointer mr-2" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="bg-primary-300 text-light w-72 h-14">記録をもっと見る</button>
    </div>
  );
};

export default GridColumns;
