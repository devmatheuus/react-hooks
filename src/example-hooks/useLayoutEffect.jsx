import { useLayoutEffect, useRef, useState } from 'react';

export const ExampleUseLayoutEffect = () => {
  const [counterList, setCounterList] = useState([1]);

  const divReference = useRef();

  const handleCounterList = () => {
    setCounterList((prevState) => [...prevState, +prevState.slice(-1) + 1]);
  };

  useLayoutEffect(() => {
    //Simulating heavy component loading
    const now = Date.now();
    while (Date.now() < now + 3000);

    divReference.current.scrollTop = divReference.current.scrollHeight;
  });

  return (
    <>
      <h2>Last number on numbers list: {counterList.slice(-1)}</h2>
      <button onClick={handleCounterList}>Click to increment a number</button>

      <div
        ref={divReference}
        style={{
          width: '100px',
          height: '100px',
          overflowY: 'auto',
        }}
      >
        {counterList.map((number) => (
          <p key={number}>{number}</p>
        ))}
      </div>
    </>
  );
};
