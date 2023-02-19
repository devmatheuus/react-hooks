import P from 'prop-types';
import React from 'react';

export const Input = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

Input.propTypes = {
  ref: P.node,
};
