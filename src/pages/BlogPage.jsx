import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogPage = (props) => {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());
  // {pathname: '/posts', search: '', hash: '', state: 123, key: '2afquzoc'}
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className='posts'>
      <h2>Our Posts</h2>
      <Link to='/posts/new'>Add new post</Link>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export { BlogPage };
