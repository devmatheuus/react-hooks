import P from 'prop-types';

export const Posts = ({ post }) => {
  const { title, body } = post;
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.object,
};
