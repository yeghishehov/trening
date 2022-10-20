import { useState, useEffect } from 'react';

export default function useScrollPos() {
  const [scrollPos, setScrollPos] = useState();

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPos;
}
