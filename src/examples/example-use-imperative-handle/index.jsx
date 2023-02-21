import { useEffect, useRef, useState } from 'react';

import { DisplayCounterList } from './components/DisplayCounterList';

export const ExampleUseImperativeHandle = () => {
  const [counterList, setCounterList] = useState([1]);

  const divReference = useRef();

  const handleCounterList = () => {
    setCounterList((prevState) => [...prevState, +prevState.slice(-1) + 1]);
    divReference.current.handleRandomNumber();
  };

  useEffect(() => {
    divReference.current.divRef.scrollTop =
      divReference.current.divRef.scrollHeight;
  });

  return (
    <>
      <h2>Last number on numbers list: {counterList.slice(-1)}</h2>
      <button onClick={handleCounterList}>Click to increment a number</button>

      <DisplayCounterList counterList={counterList} ref={divReference} />
    </>
  );
};
