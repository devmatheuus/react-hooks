import { POSTS_LOADING, POSTS_SUCCESS } from './types';

export const loadPosts = async (dispatch, signal) => {
  dispatch({ type: POSTS_LOADING });

  try {
    const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal,
    });
    const posts = await postsRaw.json();

    return () => dispatch({ type: POSTS_SUCCESS, payload: posts });
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.log(error);
    }
  }
};
