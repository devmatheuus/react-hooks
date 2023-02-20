import { useContext, useEffect, useRef } from 'react';

import { Counter } from '../../components/Counter';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../contexts/Posts/actions';
import { PostsContext } from '../../contexts/Posts/context';

export const ExamplePosts = () => {
  const isMounted = useRef(false);
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    loadPosts(postsDispatch, abortController.signal).then((dispatch) => {
      if (isMounted.current && typeof dispatch === 'function') {
        dispatch();
      }
    });

    return () => {
      abortController.abort();
    };
  }, [postsDispatch]);

  return (
    <>
      <Counter />
      {postsState.isLoading && (
        <h1>Os Posts ainda estão carregando, conexão instável!</h1>
      )}

      {!postsState.isLoading &&
        postsState.posts.map((post) => <Posts key={post.id} post={post} />)}
    </>
  );
};
