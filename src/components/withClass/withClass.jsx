import React from 'react';

const withClass = (Component, className) => {
  console.log(className);
  // eslint-disable-next-line react/display-name
  return (props) => {
    console.log(props);
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    );
  };
};

export default withClass;
