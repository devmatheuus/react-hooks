import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const ExampleChildrenRender = () => {
  // Renderizando componente - 4ª ação
  console.log('%cCHILD RENDER STARTING...', 'color: green');

  // Definindo Lazy States - 5ª ação
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString();
    console.log(
      '%cState Lazy initializer - (useState + InitialValue) = ' + state,
      'color: green',
    );
    return state;
  });

  const renders = useRef(0);

  // Executando useLayoutEffect -> 6ª ação
  useLayoutEffect(() => {
    console.log('%cuseLayoutEffect', 'color: #e61a4d');

    return () => {
      console.log('%cuseLayoutEffect (Cleanup)', 'color: #e61a4d');
    };
  });

  /* ------------------------- Os useEffects são executados em ordem (de cima para baixo) --------------------------*/

  /*
    Executando primeiro useEffect da ordem -> 7ª ação
    **executado apenas na montagem do componente e na atualização do state1**
  */
  useEffect(() => {
    console.log('%cuseEffect (UPDATE state1) ' + state1, 'color: #dbc70f');
  }, [state1]);

  /*
    Executando segundo useEffect da ordem -> 8ª ação
    **executado a cada atualização do componente**
  */
  useEffect(() => {
    console.log('%cuseEffect -> No Dependencies', 'color: #dbc70f');
    renders.current += 1;

    return () => {
      console.log('%cuseEffect (Cleanup) -> No Dependencies', 'color: #dbc70f');
    };
  });

  /*
    Executando terceiro useEffect da ordem -> 9ª ação
    **executado apenas na montagem do componente**
  */
  useEffect(() => {
    console.log('%cuseEffect -> Empty dependencies', 'color: #dbc70f');

    return () => {
      console.log(
        '%cuseEffect (Cleanup) -> Empty dependencies',
        'color: #dbc70f',
      );
    };
  }, []);

  //Componente renderizado, estados definidos e efeitos executados, montagem do componente completa - 10ª ação
  console.log(
    '%cCHILD RENDER ' + renders.current + ' ENDING...',
    'color: green',
  );

  return (
    <div
      onClick={() => setState1(new Date().toLocaleString('pt-br'))}
      style={{ fontSize: '60px' }}
    >
      State: {state1}
    </div>
  );
};
