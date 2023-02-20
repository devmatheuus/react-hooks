import React from 'react';

import { Div } from '../components/Div';
import { AppContext } from '../contexts/App';

export const ExampleUseContext = () => {
  console.log('context render');

  return (
    <AppContext>
      <Div />
    </AppContext>
  );
};
