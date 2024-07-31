import { useState } from 'react';

const BadCounter = () => {
  console.log('WHOLE implementation rendered');
    
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1); 
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>Message</h1>
      <input type="text" value={message} onChange={handleMessageChange} />
      <p>Message: {message}</p>
    </div>
  );
};

export default BadCounter;