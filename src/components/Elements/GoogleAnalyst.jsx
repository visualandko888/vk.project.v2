import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalyst() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-S7QF0TVWYZ');
  }, [location.pathname]);
  return null;
}
