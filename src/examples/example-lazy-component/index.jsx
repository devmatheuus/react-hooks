import React, { Suspense, useState } from 'react';

// import  from './components/Lazy';

const loadLazyComponent = () => {
  console.log('exectuando');
  return import('./components/Lazy');
};

const LazyComponent = React.lazy(loadLazyComponent);

export const ExampleComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onMouseOver={loadLazyComponent}
        onClick={() => setShow((s) => !s)}
      >
        {show ? 'Hide Lazy Component' : 'Show Lazy Component'}
      </button>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </>
  );
};
