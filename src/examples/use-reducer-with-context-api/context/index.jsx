import P from 'prop-types';
import { createContext, useReducer } from 'react';

import { actions } from '../actions';
import { handleReducerWithContext } from '../reducer';
import { exampleState } from './data';

export const Context = createContext();

export const ExampleContext = ({ children }) => {
  const [state, dispatch] = useReducer(handleReducerWithContext, exampleState);
  const { CHANGE_TITLE } = actions;

  const changeTitle = (payload) => {
    dispatch({ type: CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

ExampleContext.propTypes = {
  children: P.node,
};
