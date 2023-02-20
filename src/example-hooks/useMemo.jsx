import P from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

const Post = React.memo(({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

export const ExampleUseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou!');

  const loadPosts = useCallback(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  // Component did mount
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
};
