import React from 'react';
import classNames from 'classnames';

const BodyGraph = ({ className }) => (
  <div className={classNames('h-80 bg-dark-600', className)}>
    <img src="./images/graph.svg" alt="indicator" className="h-full w-full" />
  </div>
);

export default BodyGraph;
