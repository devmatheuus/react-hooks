import { useEffect, useState } from 'react';

const listenHeadingEvent = () => {
  console.log('H1 clicado');
};

export const ExampleUseEffect = () => {
  const [counter, setCounter] = useState(0);

  //componentDidUpdate - executa sempre que o componente é atualizado
  useEffect(() => {
    console.log('Componente re-renderizado');
  });

  //componentDidMount - executa somente uma vez, após a renderização do componente
  useEffect(() => {
    console.log('Componente renderizado');

    document
      .getElementById('title')
      .addEventListener('click', listenHeadingEvent);

    //componentWillUnmount - Executa quando o componente vai ser desmontado (limpeza)
    return () => {
      document
        .getElementById('title')
        .removeEventListener('click', listenHeadingEvent);
    };
  }, []);

  //com dependência - executa toda vez que a dependência é atualizada
  useEffect(() => {
    console.log('Counter mudou para', counter);
  }, [counter]);

  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const decrementCounter = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="App">
      <h1 id="title">Teste 9</h1>

      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
