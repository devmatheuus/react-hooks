import P from 'prop-types';
import { useReducer } from 'react';

import { CounterContext } from './context';
import { counterData } from './data';
import { CounterReducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(
    CounterReducer,
    counterData,
  );

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
