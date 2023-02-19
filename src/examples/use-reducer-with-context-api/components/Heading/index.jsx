import { useContext, useRef } from 'react';

import { Context } from '../../context';
import { Input } from '../Input';

export const ReducerWithContextHeading = () => {
  const {
    state: { title },
    changeTitle,
  } = useContext(Context);

  const inputRef = useRef();

  return (
    <>
      <Input ref={inputRef} />
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{title}</h1>
    </>
  );
};
