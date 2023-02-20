import { useContext } from 'react';

import { CounterContext } from '../../contexts/Counter/context';
import * as types from '../../contexts/Counter/types';

export const Counter = () => {
  const {
    counterState: { counter },
    counterDispatch,
  } = useContext(CounterContext);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => counterDispatch({ type: types.INCREMENT_COUNTER })}
      >
        +
      </button>
      <button
        onClick={() => counterDispatch({ type: types.DECREMENT_COUNTER })}
      >
        -
      </button>
    </>
  );
};
