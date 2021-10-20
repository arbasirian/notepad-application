import { useState, useEffect } from 'react';

type Scroll = {
  scrollX: number;
  scrollY: number;
};
function useScroll() {
  const [scroll, setScroll] = useState<Scroll>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    let isMounted = true;

    function handleScroll() {
      if (isMounted) {
        setScroll({ scrollX: window.scrollX, scrollY: window.scrollY });
      }
    }

    try {
      window.addEventListener('scroll', handleScroll);
    } catch (_) {
      // nth on server side
    }

    return () => {
      isMounted = false;
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (_) {
        // nth on server side
      }
    };
  }, []);

  return scroll;
}

export default useScroll;
