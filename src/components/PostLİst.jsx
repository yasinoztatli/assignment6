import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;