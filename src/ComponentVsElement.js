import React from 'react';

const ComponentVsElement = () => {
  return <p className="danger">Hello React</p>;
  // return React.createElement(
  //   'p',
  //   { className: 'danger' },
  //   'Hello React'
  // );
};

// Calling a React function component:
console.log(ComponentVsElement());
// Using a React component as an element:
console.log(<ComponentVsElement className="danger" />);

export default ComponentVsElement;
