import { useState } from 'react';

import { useInterval } from '../../hooks/useInterval';

export const ExampleUseInterval = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useInterval(() => setCounter((c) => c + 1), delay);

  return (
    <>
      <h1>Delay {delay}</h1>
      <h1>counter: {counter}</h1>
      <button onClick={() => setDelay((d) => +(d + incrementor))}>
        + {incrementor}
      </button>
      <button onClick={() => setDelay((d) => +(d - incrementor))}>
        - {incrementor}
      </button>

      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(+e.target.value)}
      />
    </>
  );
};
