import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  function decreaseCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      5. React:組件
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}
