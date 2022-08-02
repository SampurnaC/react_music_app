<<<<<<< HEAD
import React from 'react';

const Counter = ({count}) => {
  return(
    <div className='counter'>Current count: {count}</div>
  )
}

export default Counter;
=======
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
>>>>>>> eceae42597761f0e5bdc241a891d11b74f44731a
