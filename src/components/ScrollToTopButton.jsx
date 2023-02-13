import React from 'react';
import useScrollWindowToTop from '../hooks/useScrollWindowToTop';

const ScrollToTopButton = () => {
  const { onScrollTop } = useScrollWindowToTop();

  return (
    <img
      src={'./images/icon_scrollTop.svg'}
      className="h-12 w-12 fixed right-1.5 top-3/4 cursor-pointer"
      alt="scrollTop"
      onClick={onScrollTop}
    />
  );
};

export default ScrollToTopButton;
