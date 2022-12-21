// USER DEFINED TAGS == COMPONENT
function App() {
  let project = "My React Project";
  let username = "rahul";
  let project1 = "Counter Application";
  let btnValue = "Click Meeeeeee";

  // JSX => HTML CSS
  return (
    <div>
      <h1> {project} </h1>
      <h1>Hello {username} !</h1>
      <input type="button" value={btnValue} />
    </div>
  );
}
export default App;
