import P from 'prop-types';

import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

export const Div = () => {
  return (
    <>
      <Heading />
      <Paragraph />
    </>
  );
};

Div.propTypes = {
  children: P.node,
};
