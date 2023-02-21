import { useCallback, useEffect, useRef, useState } from 'react';

export const useAsync = (asyncFunction, shouldRunAgain = false) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const abortControllerRef = useRef();

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus('pending');

    const newAbortController = new AbortController();
    abortControllerRef.current = newAbortController;

    return asyncFunction()
      .then((response) => {
        setStatus('settled');
        setResult(response);
      })
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRunAgain) {
      run();
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [shouldRunAgain, run]);

  return [run, result, error, status];
};
