import { useCallback, useContext } from 'react';

import { GlobalContext } from '../../contexts/App';

export const Paragraph = () => {
  console.log('paragraph render');

  const {
    state: { body, counter },
    setState,
  } = useContext(GlobalContext);

  const incrementCounter = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  }, [setState]);

  return (
    <p onClick={incrementCounter}>
      {body} {counter}
    </p>
  );
};
