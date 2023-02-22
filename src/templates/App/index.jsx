import './styles.css';

import { CounterProvider } from '../../contexts/Counter';
import { PostsProvider } from '../../contexts/Posts';
import { ExampleReactFlow } from '../../examples/example-react-flow';

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
        <ExampleReactFlow />
      </PostsProvider>
    </CounterProvider>
  );
};
