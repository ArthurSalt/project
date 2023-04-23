import React, { useState } from "react";

const Counter = () => {

   const [count, setCount] = useState(0);

   function increment() {
      setCount(count + 1)
   }

   function decrement() {
      setCount(count - 1)
   }

   return (
      <div>
         <button onClick={increment}>Plus</button>
         <button onClick={decrement}>Minus</button>
         <h1>{count}</h1>
      </div>
   );
};

export default Counter;