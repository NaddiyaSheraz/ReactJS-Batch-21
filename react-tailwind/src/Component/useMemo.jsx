//////////////// without use Memo ///////////////
// import React, { useState } from "react";

// function UseMemo() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(2);

//   // Heavy Calculation
//   const calculateSquare = () => {
//     console.log("Calculation Running...");
//     return number * number;
//   };

//   const result = calculateSquare();

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button className="bg-blue-700 p-1 rounded-2xl" onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>

//       <h2>Number: {number}</h2>

//       <button className="bg-blue-700 p-1 rounded-2xl"  onClick={() => setNumber(number + 1)}>
//         Change Number
//       </button>

//       <h2>Square: {result}</h2>
//     </div>
//   );
// }

// export default UseMemo;


/////////////////// With use Memo ////////////////////

import React, { useState, useMemo } from "react";

function Memos() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const result = useMemo(() => {

    console.log("Calculation Running...");

    return number * number;

  }, [number]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h2>Number: {number}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <h2>Square: {result}</h2>
    </div>
  );
}

export default Memos;

