import { useEffect, useRef, useState } from 'react';

import { ExampleChildrenRender } from './components/ExampleChildrenRender';

export const ExampleReactFlow = () => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current += 1;
  });

  //Renderizando componente - 1ª ação
  console.log(`%cPARENT RENDER ${renders.current} STARTING...`, 'color: green');

  //Definindo estados - 2ª ação
  const [show, setShow] = useState(false);
  console.log(
    '%cState Initializer - (useState + InitialValue) = ' + show,
    'color: green',
  );

  //Componente renderizado e estados definidos, montagem do componente completa - 3ª ação
  console.log(`%cPARENT RENDER ${renders.current} ENDING...`, 'color: green');
  return (
    <div>
      <p style={{ fontSize: '60px' }} onClick={() => setShow((s) => !s)}>
        Show hooks
      </p>
      {show && <ExampleChildrenRender />}
    </div>
  );
};
