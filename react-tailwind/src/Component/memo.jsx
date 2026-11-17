// import React, { useState } from "react";
// //studet componet
// function Student({ name }) {
//   console.log("Student Component Rendered");

//   return <h2>Hello {name}</h2>;
// }

// function memo() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Counter: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Student name="Ali" />
//     </div>
//   );
// }
// export default memo;

/////////// Student componen with react.memo

// import React, { useState } from "react";

// const Student = React.memo(function Student({ name }) {
//   console.log("Student Component Rendered");
//   return <h2>Hello {name}</h2>;

// });

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Student name="Ali" />
//     </div>
//   );
// }

// export default App;
