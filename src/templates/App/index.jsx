import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleUseImperativeHandle } from '../../examples/example-use-imperative-handle';

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
        {/* <ExampleUseLayoutEffect /> */}
        <ExampleUseImperativeHandle />
      </PostsProvider>
    </CounterProvider>
  );
};
