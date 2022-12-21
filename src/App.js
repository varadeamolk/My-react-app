import { useState } from "react";

function App() {
  let str1 = "Home";
  let str2 = "Explore";
  let str3 = "Notifications";
  // let counter = 1;
  let [counter, setCounter] = useState(1);

  // let city = "mumbai";
  let [city, setCity] = useState("mumbai");
  let changeCity = () => {
    city = "Hello " + city;

    // RE-RENDERING THE city value.
    setCity(city);
  };
  // useState, hooks, Stateful Variable
  // ES6 Syntax : De-Structureing
  // let counter = 100;
  

  // Member function,
  // ES6 Syntax: Arrow Function
  // React Binding + using Interpolation
  // How calling this function.
  let increment = () => {
    // logical part
    // logical opr
    counter++;
    console.log(counter);

    // DOM Update Part.
    // dom opr
    setCounter(counter);
  };

  return (
    <div>
      <h1>{city}</h1>
      <input type="button" value="Change City" onClick={changeCity} />
      <hr />
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <h1>Counter Application</h1>
      <h1> {counter} </h1>
      <input type="button" value="Incrment" onClick={increment} />
    </div>
  );
}
export default App;