import P from 'prop-types';
import React, { useCallback, useState } from 'react';

const Button = React.memo(({ incrementCounter }) => {
  console.log('Componente filho renderizado');

  return <button onClick={() => incrementCounter(10)}>+</button>;
});

export const ExampleUseCallback = () => {
  const [counter, setCounter] = useState(0);

  console.log('UseCallback renderizado');

  const incrementCounter = useCallback((number) => {
    setCounter((prevState) => prevState + number);
  }, []);

  return (
    <div className="App">
      <h1 id="title">Teste</h1>

      <h2>Contador: {counter}</h2>
      <Button incrementCounter={incrementCounter} />
    </div>
  );
};

Button.propTypes = {
  incrementCounter: P.func,
};
