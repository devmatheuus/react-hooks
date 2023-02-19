import { useContext } from 'react';

import { GlobalContext } from '../../contexts/App';

export const Heading = () => {
  console.log('heading render');

  const {
    state: { title, counter },
  } = useContext(GlobalContext);

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
