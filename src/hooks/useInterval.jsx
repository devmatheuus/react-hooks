import { useEffect, useRef } from 'react';

export const useInterval = (callbackFn, delay = 1000) => {
  if (delay < 0 || delay > 3000) {
    delay = 0;
  }

  const lastCallbackFnReference = useRef();

  useEffect(() => {
    lastCallbackFnReference.current = callbackFn;
  }, [callbackFn]);

  useEffect(() => {
    const interval = setInterval(() => {
      lastCallbackFnReference.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};
