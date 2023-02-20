import P from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const Post = React.memo(({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
});

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

export const ExampleUseRef = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const input = useRef(null);
  const renderCount = useRef(0);

  console.log('Pai renderizou!');

  const loadPosts = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  useEffect(() => {
    renderCount.current++;
  });
  // Component did mount
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleClick = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <div className="App">
      <h2>Componente pai renderizou: {renderCount.current}x</h2>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} post={post} handleClick={handleClick} />
        ))
      ) : (
        <p>Ainda não existem posts.</p>
      )}
    </div>
  );
};
