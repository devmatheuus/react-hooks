import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleCompoundComponent } from '../../examples/example-compound-components';

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
        {/* <ExampleErrorBoundaries /> */}
        <ExampleCompoundComponent />
      </PostsProvider>
    </CounterProvider>
  );
};
