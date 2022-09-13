import React from 'react';
import { useParams } from 'react-router-dom';

const EditPost = (props) => {
  console.log(useParams());
  const { id } = useParams();
  return (
    <>
      <h1>Edit Post</h1>
      <span>ID - {id}</span>
    </>
  );
};

export { EditPost };
