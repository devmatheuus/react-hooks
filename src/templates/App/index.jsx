import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleUseMediaQuery } from '../../examples/example-use-media-query';

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
        {/* <ExampleUseImperativeHandle /> */}
        <ExampleUseMediaQuery />
      </PostsProvider>
    </CounterProvider>
  );
};
