const useScrollWindowToTop = () => {
  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { onScrollTop };
};

export default useScrollWindowToTop;
