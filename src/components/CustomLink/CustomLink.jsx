import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match ? 'black' : 'gray',
        backgroundColor: match ? 'var(--color-active)' : 'orange',
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
