import * as types from './types';

export const CounterReducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, counter: state.counter++ };
    case types.DECREMENT_COUNTER:
      return { ...state, counter: state.counter-- };
  }

  return { ...state };
};
