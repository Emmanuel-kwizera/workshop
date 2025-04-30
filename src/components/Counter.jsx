import React, {useState} from 'react'

export default function Counter() {
    
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const half = () => setCount(Math.floor(count / 2));

  return (
    <div className="counter" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      <h2>Counter: <span>{count}</span> </h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}
