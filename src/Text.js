import React from 'react';

export const Text = ({ className, children }) => {
  // return <p className={className}>{children}</p>;

  return React.createElement(
    'p',
    { className: className },
    children
  );
};