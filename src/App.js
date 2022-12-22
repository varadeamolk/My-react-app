function App() {
  {
    /** Default No param */
  }
  let clickMe1 = () => {
    console.log("Hello");
  };

  let clickMe2 = (e) => {
    console.log(e);
  };

  let clickMe3 = (p1) => {
    console.log(p1);
  };

  let clickMe4 = (e, p1) => {
    console.log(e, p1);
  };
  return (
    <div>
      <h1>click Demo</h1>
      {/** Default No param */}
      <input type="button" value="Click Me1" onClick={clickMe1} />

      {/** Default Event Param */}
      <input type="button" value="Click Me2" onClick={clickMe2} />

      {/** Custom Param */}
      <input type="button" value="Click Me3" onClick={() => clickMe3("ram")} />

      {/** Event + Custom Param */}
      <input
        type="button"
        value="Click Me4"
        onClick={(e) => clickMe4(e, "shiv")}
      />
    </div>
  );
}

export default App;
