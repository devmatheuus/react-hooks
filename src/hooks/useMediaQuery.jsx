import { useDebugValue, useEffect, useRef, useState } from 'react';

export const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);
  const isMounted = useRef(true);

  useDebugValue(`Query value: ${queryValue}`, (name) => name + '.');

  useEffect(() => {
    isMounted.current = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted.current) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted.current = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};
