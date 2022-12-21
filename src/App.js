import { useState } from "react";

function App() {
  // useState, hooks, Stateful Variable
  // ES6 Syntax : De-Structureing
  // let counter = 100;
  let [counter, setCounter] = useState(100);

  // Member function,
  // ES6 Syntax: Arrow Function
  // React Binding + using Interpolation
  // How calling this function.
  let increment = () => {
    // logical opr
    counter++;

    // dom opr
    setCounter(counter);
  };
  let title = "Map Demo";
  let user = { id: 1, city: "mumbai" };

  return (
    <div>
      <h1>Counter Application</h1>
      <h1> {counter} </h1>
      <input type="button" value="Incrment" onClick={increment} />
      <h1> {title} </h1>
      <h1>{user.city}</h1>
    </div>
  );
}
export default App;