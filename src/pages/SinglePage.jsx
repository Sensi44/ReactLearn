import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1); // -1, +4 как удобно
  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <>
      <p>Single Page</p>
      <div>{id}</div>

      <div>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p style={{ width: '600px' }}>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
          </>
        )}
      </div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go Home</button>
    </>
  );
};

export { SinglePage };
