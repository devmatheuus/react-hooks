import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleErrorBoundaries } from '../../examples/example-error-boundary';

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
        {/* <ExampleUseMediaQuery /> */}
        {/* <ExampleReactFlow /> */}
        <ExampleErrorBoundaries />
      </PostsProvider>
    </CounterProvider>
  );
};
