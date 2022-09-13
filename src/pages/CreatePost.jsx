import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hook/useAuth';

const CreatePost = (props) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1>Create Post</h1>
      <button onClick={() => signOut(() => navigate('/', { replace: true }))}>
        Log Out
      </button>
    </>
  );
};

export { CreatePost };
