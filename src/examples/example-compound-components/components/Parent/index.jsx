import P from 'prop-types';
import React from 'react';

const styles = {
  style: {
    fontSize: '15px',
    color: 'blue',
  },
};

export const Parent = ({ children }) => {
  return React.Children.map(children, (child) => {
    const customChild = React.cloneElement(child, { ...styles });

    return customChild;
  });
};

Parent.propTypes = {
  children: P.node,
};
