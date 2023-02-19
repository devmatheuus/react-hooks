import { actions } from './actions';

export const handleReducerWithContext = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: action.payload || 'any thing' };
  }

  return { ...state };
};
