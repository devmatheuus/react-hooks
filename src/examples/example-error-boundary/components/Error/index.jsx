import { useEffect, useState } from 'react';

export const ErrorComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que chato!');
    }
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>
        click to increase {counter}
      </button>
    </div>
  );
};
