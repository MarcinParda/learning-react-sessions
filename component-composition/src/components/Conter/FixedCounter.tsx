import { useState } from 'react';

const Counter = () => {
  console.log('WHOLE Counter rendered');
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

const MessageInput = () => {
  console.log('WHOLE MessageInput rendered');
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>Message</h1>
      <input type="text" value={message} onChange={handleMessageChange} />
      <p>Message: {message}</p>
    </div>
  );
};

const FixedCounter = () => {
  console.log('WHOLE implementation rendered');
  return (
    <div>
      <Counter />
      <MessageInput />
    </div>
  );
};

export default FixedCounter;