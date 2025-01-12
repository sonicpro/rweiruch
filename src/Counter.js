import { useState } from 'react';

export const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <div>{count}</div>
    </div>
  );
};