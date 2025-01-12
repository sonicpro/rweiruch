import { useState } from 'react';
import { Counter } from './Counter';

const ComponentVsElement3 = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
      {/* Calling a component instead of using it as an element inserts its implementation into caller component 
          This violates the rules of hooks if a component implementation is inserted conditionally. */}
      {/* {isVisible ? Counter({ initialCount: 42 }) : null} */}

      {/* That way the child component unmounts when using conditional rendering along with its hooks */}
      {isVisible ? <Counter initialCount={42} /> : null}
    </div>
  );
};

export default ComponentVsElement3;