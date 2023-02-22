import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleComponent } from '../../examples/example-lazy-component';

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
        {/* <ExampleCompoundComponent /> */}
        <ExampleComponent />
      </PostsProvider>
    </CounterProvider>
  );
};
