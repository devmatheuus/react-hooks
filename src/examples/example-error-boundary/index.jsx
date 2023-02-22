import { ErrorComponent } from './components/Error';
import { ErrorBoundary } from './ErrorBoundary';

export const ExampleErrorBoundaries = () => {
  return (
    <>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    </>
  );
};
