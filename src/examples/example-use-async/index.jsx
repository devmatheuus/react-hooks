import { useAsync } from '../../hooks/useAsync';

const fetchData = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();

    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const ExampleUseAsync = () => {
  const [run, result, error, status] = useAsync(fetchData, true);

  switch (status) {
    case 'idle':
      return <pre>Nada executando...</pre>;
    case 'pending':
      return <pre>Carregando...</pre>;
    case 'error':
      return <pre>{error.message}</pre>;
    case 'settled':
      return <pre>{JSON.stringify(result, null, 4)}</pre>;
    default:
      return 'Error';
  }
};
