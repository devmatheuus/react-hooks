import { useMediaQuery } from '../../hooks/useMediaQuery';

export const ExampleUseMediaQuery = () => {
  //min -> >= de X px
  //max -> <= de X px

  const huge = useMediaQuery('(min-width: 1000px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 322px)');
  const small = useMediaQuery('(max-width: 321px)');

  return (
    <div
      style={{
        background: huge
          ? 'red'
          : big
          ? 'green'
          : medium
          ? 'yellow'
          : small
          ? 'purple'
          : 'blue',
      }}
    >
      <h1>ExampleUseMediaQuery</h1>
    </div>
  );
};
