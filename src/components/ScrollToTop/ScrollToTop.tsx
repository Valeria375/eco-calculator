// src/components/ScrollToTop/ScrollToTop.tsx (альтернативная версия)
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Мгновенная прокрутка без анимации - работает надежнее
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;