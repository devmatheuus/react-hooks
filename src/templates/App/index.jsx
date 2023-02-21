import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleUseLayoutEffect } from '../../example-hooks/useLayoutEffect';

export const App = () => {
  return (
    <CounterProvider>
      <PostsProvider>
        {/* <ExampleUseState /> */}
        {/* <ExampleUseEffect /> */}
        {/* <ExampleUseCallback /> */}
        {/* <ExampleUseMemo /> */}
        {/* <ExampleUseRef /> */}
        {/* <ExampleUseContext /> */}
        {/* <ExampleUseReducer /> */}
        {/* <ExampleReducerWithContext /> */}
        {/* <ExampleUseInterval /> */}
        {/* <ExamplePosts /> */}
        {/* <ExampleUseAsync /> */}
        <ExampleUseLayoutEffect />
      </PostsProvider>
    </CounterProvider>
  );
};
