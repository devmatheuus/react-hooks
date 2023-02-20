import { useReducer } from 'react';

export const ExampleUseReducer = () => {
  const globalState = {
    title: 'A title',
    body: 'body',
    counter: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'muda':
        return { ...state, title: 'Mudou' };
      case 'inverter':
        return {
          ...state,
          title: state.title.split('').reverse().join(''),
        };
    }
    return { ...state };
  };

  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, counter } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda' })}>Click me</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>
        Invert title
      </button>
    </div>
  );
};
