import React, { useState, useEffect } from "react";
export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(10), 1000);
  }, []);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(count*2)}>x2</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
