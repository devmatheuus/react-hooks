import * as types from './types';

export const incrementCouner = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};

export const decrementCouner = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};
