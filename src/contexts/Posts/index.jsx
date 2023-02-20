import P from 'prop-types';
import { useReducer } from 'react';

import { PostsContext } from './context';
import { postsData } from './data';
import { postsReducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(postsReducer, postsData);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
