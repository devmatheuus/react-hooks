import P from 'prop-types';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export const DisplayCounterList = React.forwardRef(({ counterList }, ref) => {
  const [randomNumber, setRandomNumber] = useState('0.24');

  const divRef = useRef();

  const handleRandomNumber = useCallback(() => {
    setRandomNumber(Math.random().toFixed(2));
  }, []);

  useImperativeHandle(
    ref,
    () => ({ handleRandomNumber, divRef: divRef.current }),
    [handleRandomNumber, divRef],
  );

  return (
    <>
      <div
        ref={divRef}
        style={{
          width: '500px',
          height: '100px',
          overflowY: 'auto',
        }}
      >
        {counterList.map((number) => (
          <p key={number} onClick={handleRandomNumber} role="button">
            {number} --- {randomNumber}
          </p>
        ))}
      </div>
    </>
  );
});

DisplayCounterList.propTypes = {
  counterList: P.array.isRequired,
};
