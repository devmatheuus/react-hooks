import { ReducerWithContextHeading } from './components/Heading';
import { ExampleContext } from './context';

export const ExampleReducerWithContext = () => {
  return (
    <ExampleContext>
      <ReducerWithContextHeading />
    </ExampleContext>
  );
};
