// without usecallback
// import { useState } from "react";
// function Callback() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Button Clicked");
//   };

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>

//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// function Child({ onClick }) {
//   console.log("Child Rendered");

//   return <button onClick={onClick}>Click Me</button>;
// }

// export default Callback;

// with useCallback
import { useCallback, useState } from "react";
import React from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child Rendered");

  return <button onClick={onClick}>Click Me</button>;
});

function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <button className="bg-blue-700 p-1 rounded-2xl" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Callback;