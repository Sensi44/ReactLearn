import React from 'react';

// HIGH ORDER COMPONENT
// Берём компонент, оборачиваем в нужное нам и возвращаем его слегка изменённым
const withClass = (Component, className) => {
  // eslint-disable-next-line no-unused-vars
  const i = 0;
  return function list(props) {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    );
  };
};

export default withClass;
