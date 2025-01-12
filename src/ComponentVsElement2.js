import React from 'react';
import { Text } from './Text';

const ComponentVsElement2 = () => {
  // return (
  //   <div className="container">
  //     <Text className="danger">Hello React</Text>
  //     <Text className="info">You rock, React!</Text>
  //   </div>
  // );

  return React.createElement(
    'div',
    {
      className: 'container',
    },
    [
      React.createElement(
        Text,
        { className: 'danger' },
        'Hello React'
      ),
      React.createElement(
        Text,
        { className: 'info' },
        'You rock, React!'
      ),
    ]
  );
}

console.log(ComponentVsElement2());

export default ComponentVsElement2;