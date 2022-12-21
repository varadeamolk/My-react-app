function App() {
  // Data Members
  let project = "Counter Application";
  let btnValue = "Click Meeeeeee";
  // stateless variable
  let counter = 100;

  // Member :: Type is Functions
  let clickMe = () => alert();
  let incrment = () => {};
  let decrement = () => {};
  let increment = () => {
    counter = counter + 1;
    console.log(counter);
  };

  // JSX
  return (
    <div>
      <h1> {project} </h1>
      <h1> </h1>
      <input type="button" value={btnValue} onClick={clickMe} />
      <h1>Counter Application</h1>

      <input type="button" value="Increment" onClick={incrment} />
      <h1>{counter}</h1>

      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}
export default App;
